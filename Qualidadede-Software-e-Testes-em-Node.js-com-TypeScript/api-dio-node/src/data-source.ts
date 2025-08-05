import { DataSource } from "typeorm"

const isTestEnvironment = process.env.NODE_ENV === 'test';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: isTestEnvironment 
        ? "./src/database/database.test.sqlite" 
        : "./src/database/database.sqlite",
    synchronize: false, // MUITO IMPORTANTE: desativar ao usar migrations
    logging: !isTestEnvironment, // Desativa os logs SQL no ambiente de teste para um output mais limpo
    // O caminho deve apontar para onde suas entidades estão ou estarão localizadas.
    entities: ["./src/entities/*.ts"],
    subscribers: [],
    migrations: ["./src/database/migrations/*.ts"],
})