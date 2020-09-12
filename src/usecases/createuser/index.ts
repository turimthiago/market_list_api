import { UserRepository } from "src/repositories/UserRepository";
import { UserRepositoryDatabase } from "src/repositories/implementations/UserRepositoryDatabase";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserController } from "src/controllers/CreateUserController";

const repository: UserRepository = new UserRepositoryDatabase();

const createUserUseCase: CreateUserUseCase = new CreateUserUseCase(repository);

const createUserControlller: UserController = new UserController(
  createUserUseCase 
);

export { createUserUseCase, createUserControlller };
