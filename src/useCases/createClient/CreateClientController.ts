import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
	constructor(private createClientUseCase: CreateClientUseCase) {}
	async handle(request: Request, response: Response) {
		const { name, email, telefone, coordenadax, coordenaday } = request.body;

		await this.createClientUseCase.execute({ name, email, telefone, coordenadax, coordenaday });

		return response.send()
	}
}

export { CreateClientController };
