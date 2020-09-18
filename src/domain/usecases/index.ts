import { UserRepositoryDatabase } from "../../external/datasources/UserRepositoryDatabase";
import { UserRepository } from "../repositories/UserRepository";
import { UserController } from "../user/UserController";
import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";
import { ListUsersUseCase } from "./ListUsers/ListUsersUseCase";

const repository: UserRepository = new UserRepositoryDatabase();

const createUserUseCase: CreateUserUseCase = new CreateUserUseCase(repository);

const listUsersUseCase: ListUsersUseCase = new ListUsersUseCase(repository);

const userController: UserController = new UserController(
  createUserUseCase,
  listUsersUseCase
);

export { createUserUseCase, listUsersUseCase, userController };
