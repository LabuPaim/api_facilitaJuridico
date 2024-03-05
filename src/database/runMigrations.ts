import path from "path";
import fs from "fs";
import { createConnection } from "./connection";

(async () => {
	const  client  = await createConnection();
	const fileDatabasedir = path.join(__dirname, "migrations");

	console.log("Start migration", new Date());

	fs.readdir(fileDatabasedir, (err, files) => {
		if (err) console.log(err);
		files.forEach((file) => {
			fs.readFile(path.join(fileDatabasedir, file), async (err, content) => {
				if (err) console.log(err);
				const runMigrationsQuery = content.toString();
				await client.query(runMigrationsQuery);
			});
		});
		console.log("Finish migration", new Date());
	});
})();
