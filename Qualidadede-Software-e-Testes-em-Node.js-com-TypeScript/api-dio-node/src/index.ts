import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
    .then(() => {
        console.log("Fonte de dados inicializada com sucesso!");
        
        const server = express();
        
        server.use(express.json())
        server.use(router)
        server.listen(5000, ()=>{
            console.log('Servidor rodando na porta 5000 http://localhost:5000')
        })
    })
    .catch((err) => {
        console.error("Erro durante a inicialização da fonte de dados:", err)
    })