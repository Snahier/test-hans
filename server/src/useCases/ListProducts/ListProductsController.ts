import { ListProductsUseCase } from "./ListProductsUseCase"
import { Request, Response } from "express"

export class ListProductsController {
  constructor(private readonly listProductsUseCase: ListProductsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    return response.json({ error: { message: "Method not implemented" } })
  }
}
