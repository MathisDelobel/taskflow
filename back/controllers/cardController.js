import { Card } from "../models/relations.js";
import Joi from "joi";

export const cardController = {
	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns {Array} 200 - An array of cards
	 */
	getCards: async (req, res) => {
		const cards = await Card.findAll({
			include: ["list", "comments", "attachments", "labels", "assignedUsers"],
		});
		if (!cards) {
			res.status(404).json({ message:"Aucune carte trouvée"});
		}

		res.status(200).json(cards);
	},

	getOneCard: async (req, res) => {
		const id = req.params.id;
		const card = await Card.findByPk(id, {
			include: ["list", "comments", "attachments", "labels", "assignedUsers"],
		});
		if (!card) {
			res.status(404).json({ message:"Aucune carte trouvée"});
		}

		res.status(200).json(card);
	},

	createCard: async (req, res) => {
		const schema = Joi.object({
			title: Joi.string().min(3).required(),
			description: Joi.string().min(3),
			due_date: Joi.date(),
			order_index: Joi.number(),
			list_id: Joi.number().required(),
		})
		const { error } = schema.validate(req.body);
		if (error) {
			return res.status(400).json(error.details[0].message);
		}

		const card = await Card.create(req.body);

		res.status(201).json({message: "Création de la carte réussie", card});
	}
};
