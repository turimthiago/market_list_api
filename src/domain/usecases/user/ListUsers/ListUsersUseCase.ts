import { User } from "src/domain/entities/User";
import { UserDataSource } from "src/infra/datasources/UserDataSource";

export class ListUsersUseCase {
  constructor(private userDataSource: UserDataSource) {}

  async execute(): Promise<Array<User>> {
    return await this.userDataSource.findAll();
  }
}
