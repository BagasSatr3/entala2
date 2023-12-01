import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "roundhouse.proxy.rlwy.net",
    port: 39059,
    username: "postgres",
    password: "g3F2F22eE6FA-da5e*Fb-fCDAd46A*6F",
    database: "railway",
    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
})
