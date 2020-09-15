import { Convert } from "../Converter";
import { User } from "./User";
import { UserDTO } from "./UserDTO";

export class UserDTOConverter implements Convert<User, UserDTO> {
  convert(entity: User): UserDTO {
    return { name: entity.name, email: entity.email };
  }
}
