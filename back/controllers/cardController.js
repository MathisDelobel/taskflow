import { Card } from "../models/relations.js";

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
			res.status(404).json({ error: "No card found" });
		}

		res.status(200).json(cards);
	},

	getOneCard: async (req, res) => {
		const id = req.params.id;
		const card = await Card.findByPk(id, {
			include: ["list", "comments", "attachments", "labels", "assignedUsers"],
		});
		if (!card) {
			res.status(404).json({ error: "No card found" });
		}

		res.status(200).json(card);
	},
};
