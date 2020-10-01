import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUserController {
  constructor(private usecase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const users = await this.usecase.execute();
    return response.status(200).send(users);
  }
}
