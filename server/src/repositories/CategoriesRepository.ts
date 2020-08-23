import { Category } from "../entities/Category"

export interface CategoriesRepository {
  getAllCategories(): Promise<Category[] | any>
}
