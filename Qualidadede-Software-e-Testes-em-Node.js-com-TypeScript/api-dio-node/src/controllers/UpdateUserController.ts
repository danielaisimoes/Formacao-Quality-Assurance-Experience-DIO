import { Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUserService';

class UpdateUserController{
    async handle(request: Request, response: Response){
        const updateUserService = new UpdateUserService();
        
        const { id, name, email } = request.body;

        if(id.length === 0){
            return response.status(400).json({mensagem: 'Id não informado'})
        }

        if(name.length === 0){
            return response.status(400).json({mensagem: 'Informe um nome'})
        }

        await updateUserService.execute({id, name, email});


        return response.status(204).json({mensagem: 'Usuário atualizado com sucesso'})
    }
}

export { UpdateUserController }