import { ListCategoriesUseCase } from "./ListCategoriesUseCase"
import { Request, Response } from "express"

export class ListCategoriesController {
  constructor(private readonly listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const categories = await this.listCategoriesUseCase.execute()
      return response.json(categories)
    } catch (error) {
      return response.json({ error })
    }
  }
}
