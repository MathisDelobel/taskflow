import { Label } from "../models/relations.js";

export const labelController = {
	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns {Array} 200 - An array of labels
	 */
	getLabels: async (req, res) => {
		const labels = await Label.findAll({
			include: ["board", "cards"],
		});
		if (!labels) {
			res.status(404).json({ error: "No Label found" });
		}

		res.status(200).json(labels);
	},

	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns {Label} 200 - A label object
	 */
	getOneLabel: async (req, res) => {
		const id = req.params.id;
		const label = await Label.findByPk(id, {
			include: ["board", "cards"],
		});
		if (!label) {
			res.status(404).json({ error: "No Label found" });
		}

		res.status(200).json(label);
	},
};
