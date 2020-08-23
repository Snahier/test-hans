import { ProductsRepository } from "../ProductsRepository"

export class MysqlProductsRepository implements ProductsRepository {
  getAllProducts(): Promise<any> {
    throw new Error("Method not implemented.")
  }
  editProduct(product: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
}
