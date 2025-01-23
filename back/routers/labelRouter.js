import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import { labelController } from "../controllers/labelController.js";

export const router = Router();

/**
 * @route GET /labels
 * @returns {Array} 200 - An array of labels
 */
router.get("/labels", cw(labelController.getLabels));

/**
 * @route GET /labels/:id
 * @returns {Label} 200 - A label object
 */
router.get("/labels/:id", cw(labelController.getOneLabel));
