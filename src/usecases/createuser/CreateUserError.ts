class CreateUserError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class UserAlreadyExistsError extends CreateUserError {
  constructor(message: string) {
    super(message);
  }
}


