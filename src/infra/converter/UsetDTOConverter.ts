import { Convert } from "../../commons/Converter";
import { User } from "../../domain/entities/User";
import { UserDTO } from "../models/UserDTO";

export class UserDTOConverter implements Convert<User, UserDTO> {
  fromEntity(entity: User): UserDTO {
    return { name: entity.name, email: entity.email };
  }
  fromList(entityList: Array<User>): Array<UserDTO> {
    return entityList.map((i) => this.fromEntity(i));
  }
}
