import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import { securityController } from "../controllers/securityController.js";

export const router = Router();


router.post("/login", cw(securityController.login));


router.post("/signup", cw(securityController.signup));



router.post("/auth/me",cw(securityController.getCurrentUser));
