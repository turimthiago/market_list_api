import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";
import { UserDataSource } from "../datasources/UserDataSource";

export class UserRepositoryDatabaseImpl implements UserRepository {
  constructor(private datasource: UserDataSource) {}

  async findAll(): Promise<Array<User>> {
    return await this.datasource.findAll();
  }
  async findByEmail(email: string): Promise<User> {
    return await this.datasource.findByEmail(email);
  }
  async save(user: User): Promise<User> {
    return await this.datasource.save(user);
  }
}
