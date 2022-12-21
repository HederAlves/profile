import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "775995",
    database: "ng-users",
    synchronize: true,
    logging: false,
    entities: [Users],
    migrations: [
        "./src/migrations/Users.ts"
    ],
    subscribers: []
})