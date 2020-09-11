import { User } from "../entities/User";

test("OK TEST", () => {
  const user = new User({
    name: "Thiago Turim",
    email: "turimthiago@gmail.com",
    password: "123mudar"
  });

  expect(user.name).toEqual("Thiago Turim");
});
