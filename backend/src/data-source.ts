import "reflect-metadata"
import { DataSource } from "typeorm"

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "775995",
    database: "ng-users",
    synchronize: true,
    logging: false,
    entities: ['./entity/users.ts'],
    migrations: ['./shared/infra/typeorm/migrations/1671597667647-users.ts'],
})