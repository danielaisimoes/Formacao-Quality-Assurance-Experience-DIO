import { Request, Response } from 'express'
import { database } from '../database.js'

export class UsersController { 
    criarUsuario (request: Request, response: Response): Response {
        const { name } = request.body
    
        if (name.length < 1){
            return response.status(403).json({mensagem: 'Não é possivel criar usuários sem um nome'})
        } 

        database.push(name)
        return response.status(201).json({'mensagem': `usuario ${name} criado`})
    }

    listarUsuario(request: Request, response: Response): Response {
        return response.status(200).json(database)
    }
}
