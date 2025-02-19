import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import { boardController } from "../controllers/boardController.js";

export const router = Router();

/**
 * @route GET /boards
 * @returns {Array} 200 - An array of boards
 */
router.get("/boards", cw(boardController.getBoards));

/**
 * @route GET /boards/:id
 * @returns {Board} 200 - A board object
 */
router.get("/boards/:id", cw(boardController.getOneBoard));

/**
 * @route POST /boards
 */
router.post("/boards", cw(boardController.createBoard));

/**
 * @route PATCH /boards/:id
 */
router.patch("/boards/:id", cw(boardController.updateBoard));
