import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import { userController } from "../controllers/userController.js";

export const router = Router();

/**
 * @route GET /users
 * @returns {Array} 200 - An array of users
 */
router.get("/users", cw(userController.getUsers));

/**
 * @route GET /users/:id
 * @returns {User} 200 - A user object
 */
router.get("/users/:id", cw(userController.getOneUser));
