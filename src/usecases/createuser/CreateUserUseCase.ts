import { UserRepository } from "../../repositories/UserRepository";
import { User } from "../../entities/User";
import { CreateUserRequestDTO } from "./CreateUserDTO";
import { UserAlreadyExistsError } from "./CreateUserError";

export class CreateUserUseCase {
  constructor(private usersRepository: UserRepository) {}
  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists)
      throw new UserAlreadyExistsError("Usuário já cadastrado.");

    const user = new User(data);

    return await this.usersRepository.save(user);
  }
}
