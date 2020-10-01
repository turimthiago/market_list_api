import { User } from "../../../src/domain/entities/User";
import { UserRepository } from "../../../src/domain/repositories/UserRepository";
import { UserAlreadyExistsError } from "../../../src/domain/usecases/user/CreateUser/CreateUserError";
import { CreateUserUseCase } from "../../../src/domain/usecases/user/CreateUser/CreateUserUseCase";
import { UserRepositoryMock } from "../../mocks/UserRepositoryMock";

describe("Testes Usecase CreateUserUseCase", () => {
  const userRepository = new UserRepositoryMock();

  const user = new User({
    name: "Mock",
    email: "mock@mock.com",
    password: "123456",
  });

  it("Deve retornar um usuario", async () => {
    jest.spyOn(userRepository, "findByEmail").mockReturnValueOnce(null);
    jest.spyOn(userRepository, "save").mockResolvedValueOnce(user);

    const useCase = new CreateUserUseCase(userRepository);
    const newUser = await useCase.execute(user);

    expect(newUser).toBeInstanceOf(User);
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
