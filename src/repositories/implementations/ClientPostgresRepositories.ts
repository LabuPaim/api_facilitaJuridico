
import { Pool } from "pg";
import { IClientRepositories } from "../IClientRepositories";
import { createConnection } from "../../database/connection";
import { Client } from "../../entities/Client";

class ClientPostgresRepository implements IClientRepositories {
	private client: Pool;

	constructor() {
		createConnection().then((client) => (this.client = client));
	}
	async create({ id, name, email, telefone, coordenadax, coordenaday }: Client): Promise<void> {
		await this.client.query(
			`INSERT INTO CLIENT(ID, NAME, EMAIL, TELEFONE, COORDENADAX, COORDENADAY) VALUES($1, $2, $3, $4, $5, $6)`,
			[id, name, email, telefone, coordenadax, coordenaday]
		);
	}
}

export { ClientPostgresRepository };
