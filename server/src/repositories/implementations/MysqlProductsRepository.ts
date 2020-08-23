import { ProductsRepository } from "../ProductsRepository"
import { getManager, getRepository } from "typeorm"
import { Product } from "../../entities/Product"

export class MysqlProductsRepository implements ProductsRepository {
  async getAllProducts(): Promise<Product[]> {
    try {
      return await getRepository(Product).find({
        relations: ["categories"],
      })
    } catch (error) {
      throw new Error(error)
    }
  }
  async editProduct(product: Product): Promise<any> {
    throw new Error("Method not implemented.")
  }
}
