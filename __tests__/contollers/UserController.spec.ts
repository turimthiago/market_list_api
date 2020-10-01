import * as typeorm from 'typeorm';
import request from "supertest";
import { app } from "../../src/app";

(typeorm as any).getRepository = jest.fn();

describe("Teste API User", () => {
  it("Como implementar teste Integração", async () => {
    expect(1).toEqual(1);
  });
});
