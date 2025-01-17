import { Attachment } from '../models/relations.js';

export const attachmentController = {
    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {Array} 200 - An array of attachment
     */
    getAttachments: async (req, res) => {
        const attachments = await Attachment.findAll({
            include: ["user", "card"],
        });
        if (!attachments) {
            res.status(404).json({ error: "No attachment found" });
        }

        res.status(200).json(attachments);
    },

    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {Attachment} 200 - A attachment object
     */
    getOneAttachment: async (req, res) => {
        const id = req.params.id;
        const attachment = await Attachment.findByPk(id, {
            include: ["user","card"],
        });
        if (!attachment) {
            res.status(404).json({ error: "No attachment found" });
        }

        res.status(200).json(attachment);
    },
};