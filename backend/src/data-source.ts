import "reflect-metadata"
import { DataSource } from "typeorm"
import { migration1671688128148 } from "./1671688128148-migration"
import { users } from "./entity/users"
import { users1671597667647 } from "./shared/infra/typeorm/migrations/1671597667647-users"

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "775995",
    database: "ng-users",
    synchronize: true,
    logging: true,
    entities: [users],
    migrations: [users1671597667647,migration1671688128148]
})