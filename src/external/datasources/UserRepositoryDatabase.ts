import { UserRepository } from "../../domain/repositories/UserRepository";
import { getRepository } from "typeorm";
import { User } from "../../domain/entities/User";

export class UserRepositoryDatabase implements UserRepository {
  constructor() {}
  async findAll(): Promise<Array<User>>{
    const repository = getRepository(User);
    const users = await repository.find();
    return users;
  }

  async findByEmail(email: string): Promise<User> {
    const repository = getRepository(User);
    const user = await repository.findOne({ email });
    return user;
  }
  async save(user: User): Promise<User> {
    const repository = getRepository(User);
    const entity = await repository.save(user);
    return entity;
  }
}
