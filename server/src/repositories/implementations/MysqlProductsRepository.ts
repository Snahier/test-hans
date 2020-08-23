import { ProductsRepository } from "../ProductsRepository"

export class MysqlProductsRepository implements ProductsRepository {
  async getAllProducts(): Promise<any> {
    throw new Error("Method not implemented.")
  }
  async editProduct(product: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
}
