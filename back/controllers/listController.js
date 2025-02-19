import {List} from "../models/relations.js";
import Joi from "joi";
import sanitizeHtml from "sanitize-html";

export const listController = {
	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns {Array} 200 - An array of lists
	 */
	getLists: async (req, res) => {
		const lists = await List.findAll({
			include: ["cards", "board"],
		});
		if (!lists) {
			res.status(404).json({ message: "Aucune liste trouvée" });
		}

		res.status(200).json(lists);
	},

	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns {List} 200 - A list object
	 */
	getOneList: async (req, res) => {
		const id = req.params.id;
		const list = await List.findByPk(id, {
			include: ["cards", "board"],
		});
		if (!list) {
			res.status(404).json({ message: "Aucune liste trouvée" });
		}

		res.status(200).json(list);
	},


	createList: async (req, res) => {
		const schema = Joi.object({
			title: Joi.string().required(),
			board_id: Joi.number().required(),
		});

		const { error } = schema.validate(req.body);
		if (error) {
			return res.status(400).json(error.details[0].message);
		}

		const { title, board_id } = req.body;
		const sanitizedTitle = sanitizeHtml(title);

		const list = await List.create({title:sanitizedTitle, board_id});

		res.status(201).json(list);

	}
};
