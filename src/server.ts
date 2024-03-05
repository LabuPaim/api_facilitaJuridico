import express from "express";
import "./database/runMigrations";

const app = express();

app.listen(3000, () => {
	console.log("HTTP Server running!");
});
