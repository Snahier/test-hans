import { ProductsRepository } from "../ProductsRepository"
import { getManager } from "typeorm"
import { Product } from "../../entities/Product"

export class MysqlProductsRepository implements ProductsRepository {
  async getAllProducts(): Promise<any> {
    try {
      return await getManager().find(Product)
    } catch (error) {
      throw new Error(error)
    }
  }
  async editProduct(product: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
}
