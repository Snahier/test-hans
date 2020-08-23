import { MysqlCategoriesRepository } from "../../repositories/implementations/MysqlCategoriesRepository"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"
import { ListCategoriesController } from "./ListCategoriesController"

const mysqlCategoriesRepository = new MysqlCategoriesRepository()

const listCategoriesUseCase = new ListCategoriesUseCase(
  mysqlCategoriesRepository
)

const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
)

export { listCategoriesController, listCategoriesUseCase }
