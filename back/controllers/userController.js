import { User } from "../models/relations.js";

export const userController = {
	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns {Array} 200 - An array of users
	 */
	getUsers: async (req, res) => {
		const users = await User.findAll({
			include: ["boards", "comments", "attachments", "assignedCards"],
		});
		if (!users) {
			res.status(404).json({ error: "No user found" });
		}

		res.status(200).json(users);
	},

	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns {User} 200 - A user object
	 */
	getOneUser: async (req, res) => {
		const id = req.params.id;
		const user = await User.findByPk(id, {
			include: ["boards", "comments", "attachments", "assignedCards"],
		});
		if (!user) {
			res.status(404).json({ error: "No user found" });
		}

		res.status(200).json(user);
	},
};
