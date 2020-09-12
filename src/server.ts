import "reflect-metadata";
import "./database/connection";
import { app } from "./app";

app.listen(3333, () => console.log("Server started on port [3333]"));
