import { Router, Request, Response } from "express";
import { userController } from "./domain/usecases/";

const router = Router();


router.post(
  "/users",
  async (request: Request, response: Response) =>
    await userController.store(request, response)
);

router.get(
  "/users",
  async (request: Request, response: Response) =>
    await userController.get(request, response)
);

export { router };
