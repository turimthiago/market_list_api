import { User } from "src/domain/entities/User";
import { UserDTO } from "../models/UserDTO";

export interface UserDataSource {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<User>;
  findAll() : Promise<Array<User>>;
}
