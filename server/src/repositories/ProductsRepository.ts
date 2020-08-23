export interface ProductsRepository {
  getAllProducts(): Promise<any>
  editProduct(product: any): Promise<any>
}
