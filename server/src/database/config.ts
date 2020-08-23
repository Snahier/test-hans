import { getConnectionManager, ConnectionManager, Connection } from "typeorm"

const connectionManager = getConnectionManager()
const connection = connectionManager.create({
  type: "mysql",
  host: "mysql",
  port: 3306,
  username: "root",
  password: "root",
  database: "defaultdb",
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/database/migrations/**/*.ts"],
  subscribers: ["src/subscribers/**/*.ts"],
  synchronize: true,
  logging: false,
})
const conn = connection.connect().then((connection) => connection)
