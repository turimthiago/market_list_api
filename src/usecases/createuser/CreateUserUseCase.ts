import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserRequestDTO } from "./CreateUserDto";
import { User } from "../../entities/User";

export class CreateUserUseCase {
  constructor(private usersRepository: UserRepository) {}
  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) throw new Error("Usuário já cadastrado.");

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
