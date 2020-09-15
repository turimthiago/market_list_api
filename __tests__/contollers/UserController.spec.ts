import * as typeorm from 'typeorm';
import request from "supertest";
import { app } from "../../src/app";

(typeorm as any).getRepository = jest.fn();

describe("Teste API User", () => {
 /* it("Deve gravar um User", async () => {
    const resp = await request(app).post("/users").send({});
    expect(resp.status).toEqual(201);
  });*/

  it("Deve retornar 404 quando acessar /users", async () => {
    const resp = await request(app).get("/users");
    expect(resp.status).toEqual(404);
  });
});
