import { User } from "src/domain/entities/User";
import { UserRepository } from "src/domain/repositories/UserRepository";

export class ListUsersUseCase {
  constructor(private usersRepository: UserRepository) {}

  async execute(): Promise<Array<User>> {
    return await this.usersRepository.findAll();
  }
}
