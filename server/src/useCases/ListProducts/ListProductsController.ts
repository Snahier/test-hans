import { ListProductsUseCase } from "./ListProductsUseCase"
import { Request, Response } from "express"

export class ListProductsController {
  constructor(private readonly listProductsUseCase: ListProductsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const products = await this.listProductsUseCase.execute()
      return response.json(products)
    } catch (error) {
      return response.json({ error })
    }
  }
}
