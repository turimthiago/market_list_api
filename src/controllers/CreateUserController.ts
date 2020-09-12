import { Request, Response, json } from "express";
import { CreateUserUseCase } from "../usecases/createuser/CreateUserUseCase";
import { UserAlreadyExistsError } from "src/usecases/createuser/CreateUserError";

export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async store(request: Request, response: Response): Promise<Response> {
    console.log("store");
    const { name, email, password } = request.body;
    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });
      return response.status(201).json(user);
    } catch (e) {
      if (e instanceof UserAlreadyExistsError) {
        return response.status(401).json({ message: "Usuário já existente" });
      }
      return response.status(400).json({ message: "Erro inesperado." });
    }
  }
}
