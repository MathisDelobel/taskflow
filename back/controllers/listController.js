import { List } from "../models/relations.js";

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
			res.status(404).json({ error: "No list found" });
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
			res.status(404).json({ error: "No list found" });
		}

		res.status(200).json(list);
	},
};
