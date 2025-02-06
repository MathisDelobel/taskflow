import { Router } from "express";

import { router as userRouter } from "./userRouter.js";
import { router as boardRouter } from "./boardRouter.js";
import { router as attachmentRouter } from "./attachmentRouter.js";
import { router as commentRouter } from "./commentRouter.js";
import { router as labelRouter } from "./labelRouter.js";
import { router as cardRouter } from "./cardRouter.js";
import { router as listRouter } from "./listRouter.js";
import {router as securityRouter } from "./securityRouter.js";

// Main API router
export const router = Router();

router.use(userRouter);
router.use(boardRouter);
router.use(attachmentRouter);
router.use(commentRouter);
router.use(labelRouter);
router.use(cardRouter);
router.use(listRouter);
router.use(securityRouter);
