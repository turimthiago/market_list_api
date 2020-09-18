import { User } from "src/domain/entities/User";
import { UserDTO } from "../models/UserDTO";

export interface UserDataSource {
  findByEmail(email: string): Promise<UserDTO>;
  save(user: UserDTO): Promise<UserDTO>;
  findAll() : Promise<Array<User>>;
}
