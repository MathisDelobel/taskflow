import { Comment } from "../models/relations.js";

export const commentController = {
	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns {Array} 200 - An array of Comment
	 */
	getComments: async (req, res) => {
		const comments = await Comment.findAll({
			include: ["author", "card"],
		});
		if (!comments) {
			res.status(404).json({ error: "No Comment found" });
		}

		res.status(200).json(comments);
	},

	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns {Comment} 200 - A Comment object
	 */
	getOneComment: async (req, res) => {
		const id = req.params.id;
		const comment = await Comment.findByPk(id, {
			include: ["author", "card"],
		});
		if (!comment) {
			res.status(404).json({ error: "No Comment found" });
		}

		res.status(200).json(comment);
	},
};
