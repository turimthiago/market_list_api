import { Request, Response, json } from "express";
import { CreateUserUseCase } from "../../domain/usecases/user/CreateUser/CreateUserUseCase";
import { UserDTOConverter } from "../converters/UsetDTOConverter";
import { UserAlreadyExistsError } from "../../domain/usecases/user/CreateUser/CreateUserError";
import { ListUsersUseCase } from "../../domain/usecases/user/ListUsers/ListUsersUseCase";
import { Inject, Service } from "typedi";
import { InjectConnection } from "typeorm-typedi-extensions";

@Service()
export class UserController {
  @Inject()
  private userConverter: UserDTOConverter = new UserDTOConverter();
  @Inject()
  private createUserUseCase: CreateUserUseCase;
  @Inject()
  private listaUsersUseCase: ListUsersUseCase;
  constructor() {}

  async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    try {
      console.log(this.createUserUseCase == null);
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });
      return response.status(201).json(this.userConverter.fromEntity(user));
    } catch (e) {
      console.log(e);
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
