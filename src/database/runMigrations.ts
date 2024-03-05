import path from "path";
import fs from "fs";
import { createConnection } from "./connection";

(async () => {
	const connection = await createConnection();
	const fileDatabasedir = path.join(__dirname, "migrations");

	fs.readdir(fileDatabasedir, (err, files) => {
		console.log(files);
	});
})();
