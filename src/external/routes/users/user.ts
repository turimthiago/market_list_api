import { Request, Response, Router } from "express";
import { CreateUserController } from "src/domain/usecases/user/CreateUser/CreateUserController";
import { ListUserController } from "src/domain/usecases/user/ListUsers/ListUserController";
import { ListUsersUseCase } from "src/domain/usecases/user/ListUsers/ListUsersUseCase";
import createUsecase from "../../../domain/usecases/user/CreateUser";
import listUsecase from "../../../domain/usecases/user/ListUsers";

export default (router: Router): void => {
  router.post("/users", (request: any, response: Response) => {
    return new CreateUserController(createUsecase(request.connection)).handle(
      request,
      response
    );
  });

  router.get("/users", (request: any, response: Response) => {
    return new ListUserController(listUsecase(request.connection)).handle(
      request,
      response
    );
  });
};
