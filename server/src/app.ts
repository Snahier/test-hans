import "reflect-metadata"
import { createConnection } from "typeorm"
import express from "express"
import { router } from "./routes"
import { Category } from "./entities/Category"

createConnection({
  type: "mysql",
  host: "mysql",
  port: 3306,
  username: "root",
  password: "root",
  database: "defaultdb",
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: ["src/subscribers/**/*.ts"],
  synchronize: true,
  logging: false,
})
  .then((connection) => {
    console.log("Connected")

    const app = express()

    app.use(express.json())
    app.use(router)

    app.listen(3333, () => console.log("Listening on port 3333"))
  })
  .catch((error) => console.log(error))
