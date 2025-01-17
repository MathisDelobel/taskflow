import { Router } from "express";

import { router as userRouter } from "./userRouter.js";
import { router as boardRouter } from "./boardRouter.js";
import { router as attachmentRouter } from "./attachmentRouter.js";

// Main API router
export const router = Router();

router.use(userRouter);
router.use(boardRouter);
router.use(attachmentRouter);
