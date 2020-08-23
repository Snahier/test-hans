import { ProductsRepository } from "../../repositories/ProductsRepository"

export class ListProductsUseCase {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute() {}
}
