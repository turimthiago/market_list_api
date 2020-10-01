import { createConnection } from "typeorm";

const connect = async () => {
  await createConnection();
};

export { connect };
