import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import { commentController } from "../controllers/commentController.js";

export const router = Router();

/**
 * @route GET /comments
 * @returns {Array} 200 - An array of comments
 */
router.get("/comments", cw(commentController.getComments));

/**
 * @route GET /comments/:id
 * @returns {comment} 200 - A comment object
 */
router.get("/comments/:id", cw(commentController.getOneComment));
