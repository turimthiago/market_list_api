import { Request, Response, json } from "express";
import { CreateUserUseCase } from "../../usecases/createuser/CreateUserUseCase";
import { UserAlreadyExistsError } from "src/usecases/createuser/CreateUserError";
import { UserDTO } from "./UserDTO";
import { UserDTOConverter } from "./UsetDTOConverter";

export class UserController {
  private userConverter: UserDTOConverter = new UserDTOConverter();

  constructor(private createUserUseCase: CreateUserUseCase) {}
  /*
  async get(request: Request, response: Response): Promise<Response> {
    return response.status(404);
  }*/

  async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });
      return response.status(201).json(this.userConverter.convert(user));
    } catch (e) {
      if (e instanceof UserAlreadyExistsError) {
        return response.status(401).json({ message: "Usuário já existente" });
      }
      return response.status(400).json({ message: "Erro inesperado." });
    }
  }
}
