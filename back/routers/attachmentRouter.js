import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import { attachmentController } from "../controllers/attachmentController.js";

export const router = Router();

/**
 * @route GET /attachments
 * @returns {Array} 200 - An array of attachments
 */
router.get("/attachments", cw(attachmentController.getAttachments));

/**
 * @route GET /attachments/:id
 * @returns {Attachment} 200 - A attachment object
 */
router.get("/attachments/:id", cw(attachmentController.getOneAttachment));
