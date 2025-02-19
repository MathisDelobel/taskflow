import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import { listController } from "../controllers/listController.js";

export const router = Router();

/**
 * @route GET /lists
 * @returns {Array} 200 - An array of lists
 */
router.get("/lists", cw(listController.getLists));

/**
 * @route GET /lists/:id
 * @returns {List} 200 - A list object
 */
router.get("/lists/:id", cw(listController.getOneList));


router.post("/lists", cw(listController.createList));
