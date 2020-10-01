import { User } from "../../../src/domain/entities/User";
import { UserRepositoryMock } from "../../mocks/UserRepositoryMock";
import { ListUsersUseCase } from '../../../src/domain/usecases/user/ListUsers/ListUsersUseCase'; 

describe("Testes Usecase CreateUserUseCase", () => {
  const userRepository = new UserRepositoryMock();

  it("Deve retornar uma lista de Users", async () => {
    jest.spyOn(userRepository, "findAll").mockResolvedValue([
      new User({
        name: "Ozzy Osbourne",
        email: "ozzy@ozzy.com",
        password: "123",
      }),
      new User({
        name: "Lemmy Kilmister",
        email: "lemmy@motorhead.com",
        password: "123",
      }),
    ]);

    const useCase = new ListUsersUseCase(userRepository);
    const users : Array<User> = await useCase.execute();

    expect(users).toBeInstanceOf(Array)
    expect(users.length).toBeGreaterThan(0);
  });
});
