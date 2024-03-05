import express from "express";
import "./database/runMigrations";
import { router } from "./useCases/router";

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
	console.log("HTTP Server running!");
});
