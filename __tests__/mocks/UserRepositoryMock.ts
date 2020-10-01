import { User } from "../../src/domain/entities/User";
import { UserRepository } from "../../src/domain/repositories/UserRepository";

export class UserRepositoryMock implements UserRepository {
    findByEmail(email: string): Promise<User> {
      throw new Error("Method not implemented.");
    }
    save(user: User): Promise<User> {
      throw new Error("Method not implemented.");
    }
    findAll(): Promise<User[]> {
      throw new Error("Method not implemented.");
    }
  
  }