import { Router, Response, Request } from "express"
import { listProductsController } from "./useCases/ListProducts"
import { listCategoriesController } from "./useCases/ListCategories"

const router = Router()

router.get("/test", (request: Request, response: Response) => {
  return response.json({ message: "Hello World" })
})

router.get("/products", (request: Request, response: Response) => {
  return listProductsController.handle(request, response)
})
router.get("/categories", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response)
})

export { router }
