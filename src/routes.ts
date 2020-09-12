import { Router, Request, Response } from "express";
import { createUserControlller } from "./usecases/createuser";

const router = Router();

/*router.post("/users", async (request: Request, response: Response) => {
  return await createUserControlller.store(request, response);
});*/

router.post(
  "/users",
  async (request: Request, response: Response) =>
    await createUserControlller.store(request, response)
);

export { router };
