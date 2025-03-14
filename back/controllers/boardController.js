import { Board } from "../models/relations.js";
import Joi from "joi";
import sanitizeHtml from "sanitize-html";
import jwt from "jsonwebtoken";

export const boardController = {
	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns {Array} 200 - An array of boards
	 */
	getBoards: async (req, res) => {
		const boards = await Board.findAll({
			include: ["lists", "owner", "labels"],
		});
		if (!boards) {
			res.status(404).json({ message: "Aucun board trouvé" });
		}
		res.status(200).json(boards);
	},

	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns {Board} 200 - A board object
	 */
	getOneBoard: async (req, res) => {
		const id = Number.parseInt(req.params.id);
		const board = await Board.findByPk(id, {
			include: [
				{
					association: "lists",
					include: [
						{
							association: "cards",
							include: [
								"labels", // inclure les labels des cartes
								"attachments", // inclure les attachments des cartes
								"comments",
							],
						},
					],
				},
				"owner",
				"labels",
			],
		});
		if (!board) {
			res.status(404).json({ message: "Aucun board trouvé" });
		}
		res.status(200).json(board);
	},

	createBoard: async (req, res) => {
		const boardSchema = Joi.object({
			title: Joi.string().required(),
		});

		const { error } = boardSchema.validate(req.body);
		if (error) {
			return res.status(400).json(error.details[0].message);
		}

		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			res.status(400).json({ message: "Pas de token trouvé" });
		}
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		const userId = decodedToken.id;

		const { title } = req.body;
		const sanitizedTitle = sanitizeHtml(title);

		const exisitingBoard = await Board.findOne({
			where: { title: sanitizedTitle, user_id: userId },
		});

		if (exisitingBoard) {
			return res
				.status(400)
				.json({ message: "Ce nom de board existe déja pour cet utilisateur" });
		}

		const board = await Board.create({
			title: sanitizedTitle,
			user_id: userId,
		});

		res.status(201).json(board);
	},

	updateBoard: async (req, res) => {
		const boardSchema = Joi.object({
			title: Joi.string().required(),
			user_id: Joi.number().integer().required(),
		});

		// Validation des champs modifiés
		const { error } = boardSchema.validate(req.body);
		if (error) {
			return res.status(400).json(error.details[0].message);
		}

		const id = Number.parseInt(req.params.id);

		const board = await Board.findByPk(id);
		if (!board) {
			res.status(404).json({ message: "Board non trouvée" });
		}

		const { title, user_id } = req.body;
		const sanitizedTitle = sanitizeHtml(title);
		const cleanedUser_id = Number.parseInt(user_id);

		Object.assign(board, { title: sanitizedTitle, user_id: cleanedUser_id });
		await board.save();

		res.status(200).json(board);
	},
};
