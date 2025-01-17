import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import { cardController } from "../controllers/cardController.js";

export const router = Router();

/**
 * @route GET /cards
 * @returns {Array} 200 - An array of cards
 */
router.get("/cards", cw(cardController.getCards));

/**
 * @route GET /cards/:id
 * @returns {Card} 200 - A card object
 */
router.get("/cards/:id", cw(cardController.getOneCard));
