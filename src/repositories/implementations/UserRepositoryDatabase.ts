import { UserRepository } from "../UserRepository";
import { getRepository } from "typeorm";
import { User } from "src/domain/user/User";

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
