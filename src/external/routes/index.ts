import { Router, Request, Response } from "express";
import { CreateUserController } from "src/domain/usecases/user/CreateUser/CreateUserController";
import { CreateUserUseCase } from "../../domain/usecases/user/CreateUser/CreateUserUseCase";
import { UseCaseManager } from "../../infra/usecasemanager/UseCaseManager";
import createUseCase from "../../domain/usecases/user/CreateUser";
import user from "./users/user";

const router = Router();

user(router);

export { router };
