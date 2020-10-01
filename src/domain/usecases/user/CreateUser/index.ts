import { UserDatasourceImpl } from "../../../../external/datasources/UserDatasourceImpl";
import { Connection } from "typeorm";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserRepositoryDatabaseImpl } from "src/infra/repositories/UserRepositoryDatabaseImpl";

export default (connection: Connection): CreateUserUseCase => {
  const datasource = new UserDatasourceImpl(connection);
  const repository = new UserRepositoryDatabaseImpl(datasource);
  const createUseUseCase = new CreateUserUseCase(repository);
  return createUseUseCase;
};
