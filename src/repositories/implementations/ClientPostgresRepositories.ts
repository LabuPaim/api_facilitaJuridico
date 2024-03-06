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

    async findAll(): Promise<Client[]> {
        const { rows } = await this.client.query("SELECT * FROM CLIENT");

        return rows;
    }

    async findFilter(filter: string): Promise<Client[]> {
        const query = `
			SELECT * FROM CLIENT 
			WHERE 
				NAME ILIKE $1 OR 
				EMAIL ILIKE $1 OR 
				TELEFONE ILIKE $1
		`;
        const { rows } = await this.client.query(query, [`%${filter}%`]);
        return rows;
    }
}

export { ClientPostgresRepository };
