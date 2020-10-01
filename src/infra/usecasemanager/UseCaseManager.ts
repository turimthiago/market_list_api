import { CreateUserUseCase } from "src/domain/usecases/user/CreateUser/CreateUserUseCase";
import { Connection } from "typeorm";

export class UseCaseManager {
  private useCases: Map<any, any>;
  private static instance: UseCaseManager;

  private constructor() {
    this.useCases = new Map();
  }

  public static init() {
    if (!this.instance) {
      this.instance = new UseCaseManager();
    }
    return this.instance;
  }

  registerUseCase(clazz: object, useCase: object) {
    this.useCases.set(clazz, useCase);
  }

  public static getInstance(): UseCaseManager {
    return this.instance;
  }

  public getUseCase <T> (clazz: any) : T{
    return this.useCases.get(clazz);
  }
}
