import { User } from "../../../src/domain/entities/User";
import { UserRepository } from "../../../src/domain/repositories/UserRepository";
import { UserAlreadyExistsError } from "../../../src/domain/usecases/CreateUserError";
import { CreateUserUseCase } from "../../../src/domain/usecases/CreateUserUseCase";


class UserRepositoryMock implements UserRepository {
  findByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  save(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

describe("Testes Usecase CreateUserUseCase", () => {
  const userRepository = new UserRepositoryMock();

  const user = new User({
    name: "Mock",
    email: "mock@mock.com",
    password: "123456",
  });

  it("Deve retornar um usuario", async () => {
    jest.spyOn(userRepository, "findByEmail").mockReturnValueOnce(null);
    jest
      .spyOn(userRepository, "save")
      .mockReturnValueOnce(Promise.resolve(user));

    const useCase = new CreateUserUseCase(userRepository);
    const newUser = await useCase.execute(user);

    expect(newUser.id).not.toBeNull();
  });

  it("Deve retornar um erro UserAlreadyExistsError", async () => {
    jest
      .spyOn(userRepository, "findByEmail")
      .mockReturnValueOnce(Promise.resolve(user));

    const useCase = new CreateUserUseCase(userRepository);

    const promise = useCase.execute(user);

    expect(promise).rejects.toThrow(UserAlreadyExistsError);
  });
});
