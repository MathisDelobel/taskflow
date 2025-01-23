import { Board } from "../models/relations.js";

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
			res.status(404).json({ error: "No board found" });
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
		const id = req.params.id;
		const board = await Board.findByPk(id, {
			include: ["lists", "owner", "labels"],
		});
		if (!board) {
			res.status(404).json({ error: "No board found" });
		}

		res.status(200).json(board);
	},
};
