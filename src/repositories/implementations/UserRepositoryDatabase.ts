import { UserRepository } from "../UserRepository";
import { User } from "src/entities/User";
import { getRepository } from "typeorm";

export class UserRepositoryDatabase implements UserRepository {
  constructor() {}

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
