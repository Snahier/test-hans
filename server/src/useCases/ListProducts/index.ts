import { MysqlProductsRepository } from "../../repositories/implementations/MysqlProductsRepository"
import { ListProductsUseCase } from "./ListProductsUseCase"
import { ListProductsController } from "./ListProductsController"

const mysqlProductsRepository = new MysqlProductsRepository()

const listProductsUseCase = new ListProductsUseCase(mysqlProductsRepository)

const listProductsController = new ListProductsController(listProductsUseCase)

export { listProductsController, listProductsUseCase }
