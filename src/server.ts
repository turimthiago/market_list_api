import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { diMiddleware } from "./external/middlewares/DIMiddleware";
import { router } from "./external/routes";

createConnection().then(connection => {
    console.log("[server.ts] Database connected");
    const app = express();

    app.use(express.json());
    app.use(diMiddleware);

    app.use(router);

    app.listen(3333, () => {
        console.log(`[server.ts] Running at http://localhost:3333`);
    });
});
