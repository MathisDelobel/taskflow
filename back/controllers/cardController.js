import { Card } from "../models/relations.js";

export const cardController = {
    getCards: async (req, res) => {
        const cards = await Card.findAll({
            include: ["lists", "user", "labels"],
        });
        if (!cards) {
            res.status(404).json({ error: "No card found" });
        }

        res.status(200).json(cards);
    },

    getOneCard: async (req, res) => {
        const id = req.params.id;
        const card = await Card.findByPk(id, {
            include: ["list","comments", "attachments", "labels","users"],
        });
        if (!card) {
            res.status(404).json({ error: "No card found" });
        }

        res.status(200).json(card);
    },
};
