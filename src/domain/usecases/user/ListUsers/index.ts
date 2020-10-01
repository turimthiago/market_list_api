import { UserDatasourceImpl } from "src/external/datasources/UserDatasourceImpl";
import { UserRepositoryDatabaseImpl } from "src/infra/repositories/UserRepositoryDatabaseImpl";
import { Connection } from "typeorm";
import { ListUserController } from "./ListUserController";
import { ListUsersUseCase } from "./ListUsersUseCase";

export default (connection: Connection): ListUsersUseCase => {
  const datasource = new UserDatasourceImpl(connection);
  const repository = new UserRepositoryDatabaseImpl(datasource);
  const listUsersUseCase = new ListUsersUseCase(repository);
  return listUsersUseCase;
};
