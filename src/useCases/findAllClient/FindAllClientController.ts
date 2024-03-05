import { Request, Response } from "express";
import { FindAllClientUseCase } from "./FindAllClientUseCase";

class FindAllClientController {
	constructor(private findAllClientUseCase: FindAllClientUseCase) {}

	async handle(request: Request, response: Response) {
		const clients = await this.findAllClientUseCase.execute();
		return response.json(clients);
	}
}

export { FindAllClientController };
