import { Request, Response, json } from "express";
import { CreateUserUseCase } from "../usecases/CreateUser/CreateUserUseCase";
import { UserDTOConverter } from "../../infra/converter/UsetDTOConverter";
import { UserAlreadyExistsError } from "../usecases/CreateUser/CreateUserError";
import { ListUsersUseCase } from "../usecases/ListUsers/ListUsersUseCase";

export class UserController {
  private userConverter: UserDTOConverter = new UserDTOConverter();

  constructor(
    private createUserUseCase: CreateUserUseCase,
    private listaUsersUseCase: ListUsersUseCase
  ) {}

  async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });
      return response.status(201).json(this.userConverter.fromEntity(user));
    } catch (e) {
      if (e instanceof UserAlreadyExistsError) {
        return response.status(401).json({ message: "Usuário já existente" });
      }
      return response.status(400).json({ message: "Erro inesperado." });
    }
  }

  async get(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.listaUsersUseCase.execute();

      return response.json(this.userConverter.fromList(users));
    } catch (error) {}
  }
}
