import { Request, Response, NextFunction } from "express";
import { createUser } from "../services/user.service";
import logger from "../utils/logger";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.status(200).send(user);
  } catch (error) {
    logger.error(error);
    res.status(409).send(error.message);
  }
};
