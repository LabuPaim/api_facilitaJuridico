import { Request, Response } from "express";
import { FindClientsFromOriginUseCase } from "./FindClientsFromOriginUseCase";

class FindClientsFromOriginController {
    constructor(private findClientsFromOriginUseCase: FindClientsFromOriginUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const clients = await this.findClientsFromOriginUseCase.execute();
            return response.json(clients);
        } catch (error) {
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export { FindClientsFromOriginController };
