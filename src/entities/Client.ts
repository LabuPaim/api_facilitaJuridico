import { v4 } from "uuid";

class Client {
	id: string;
	name: string;
	email: string;
	telefone: string;
	coordenadax: string;
	coordenaday: string;

	constructor() {
		if (!this.id) {
			this.id = v4();
		}
	}
}
export { Client };
