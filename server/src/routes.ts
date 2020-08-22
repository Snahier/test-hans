import { Router, Response, Request } from "express"

const router = Router()

router.get("/test", (request: Request, response: Response) => {
  return response.json({ message: "Hello World" })
})

export { router }
