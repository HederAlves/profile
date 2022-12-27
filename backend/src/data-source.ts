import "reflect-metadata"
import { DataSource } from "typeorm"
import { users } from "./entity/users"
import { default1672064350865 } from "./migrations/1672064350865-default"

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "775995",
    database: "jornal-ng",
    synchronize: true,
    logging: true,
    entities: [users],
    migrations: [default1672064350865]
})