import { CategoriesRepository } from "../../repositories/CategoriesRepository"

export class ListCategoriesUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute() {
    return await this.categoriesRepository.getAllCategories()
  }
}
