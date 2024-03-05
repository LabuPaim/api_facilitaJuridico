import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const createConnection = async () => {
	const client = new Pool({
		host: process.env.DATABASE_HOST,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME,
	});

	await client.connect();
	return  client ;
};
export { createConnection };
