import { Request, Response } from "express";
import { FindFilterClientUseCase } from "./FindFilterClientUseCase";

class FindFilterClientController {
    constructor(private findFilterClientUseCase: FindFilterClientUseCase) {}

    async handle(request: Request, response: Response) {
        try {
            const filter = request.query.filter;

            const clients = await this.findFilterClientUseCase.execute(filter as string);
            return response.json(clients);
        } catch (error) {
            return response.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export { FindFilterClientController };
