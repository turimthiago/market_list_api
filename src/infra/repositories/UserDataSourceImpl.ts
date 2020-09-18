import { User } from "src/domain/entities/User";
import { UserRepository } from "src/domain/repositories/UserRepository";
import { UserDTO } from "src/infra/models/UserDTO";
import { UserDataSource } from "../datasources/UserDataSource";

export class UserDataSourceImpl implements UserDataSource {
  constructor(private repository: UserRepository) {}
  findAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  findByEmail(email: string): Promise<UserDTO> {
    const user = this.repository.findByEmail(email);
    return 
  }
  save(user: UserDTO): Promise<UserDTO> {
    throw new Error("Method not implemented.");
  }
}
