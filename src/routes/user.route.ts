import { Router } from "express";
import { createUserHandler } from "../controllers/user.controller";

const router = Router();

router.post("/create", createUserHandler);

export default router;
