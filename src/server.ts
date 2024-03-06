import express from "express";
import cors from "cors";
import "./database/runMigrations";
import { router } from "./useCases/router";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3001, () => {
	console.log("HTTP Server running!");
});
