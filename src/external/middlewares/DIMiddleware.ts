import { Request } from "express";
import { getConnection } from "typeorm";

const diMiddleware = (req, res, next) => {
  const connection = getConnection();
  req.connection = connection;
  next();
};

export { diMiddleware };
