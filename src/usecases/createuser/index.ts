import { UserRepository } from "src/repositories/UserRepository";
import { UserRepositoryDatabase } from "src/repositories/implementations/UserRepositoryDatabase";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserController } from "src/domain/user/UserController";

const repository: UserRepository = new UserRepositoryDatabase();

const createUserUseCase: CreateUserUseCase = new CreateUserUseCase(repository);

const userController: UserController = new UserController(
  createUserUseCase 
);

export { createUserUseCase, userController };