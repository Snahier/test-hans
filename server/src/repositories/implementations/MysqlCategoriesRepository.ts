import { CategoriesRepository } from "../CategoriesRepository"
import { getManager } from "typeorm"
import { Category } from "../../entities/Category"

export class MysqlCategoriesRepository implements CategoriesRepository {
  async getAllCategories(): Promise<Category[]> {
    try {
      const categories = await getManager().find(Category)
      console.log(categories)
      return categories
    } catch (error) {
      throw new Error(error)
    }
  }
}
