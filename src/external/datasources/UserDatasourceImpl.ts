import { UserRepository } from "../../domain/repositories/UserRepository";
import { Connection, getRepository, Repository } from "typeorm";
import { User } from "../../domain/entities/User";
import { UserDataSource } from "../../infra/datasources/UserDataSource";

export class UserDatasourceImpl implements UserDataSource {

  constructor(private connection : Connection){}

  async findByEmail(email: string): Promise<User> {
    return await this.connection.getRepository(User).findOne({ email });
  }
  async save(user: User): Promise<User> {
    return await this.connection.getRepository(User).save(user);
  }
  async findAll(): Promise<User[]> {
    return await this.connection.getRepository(User).find();
  }
}
