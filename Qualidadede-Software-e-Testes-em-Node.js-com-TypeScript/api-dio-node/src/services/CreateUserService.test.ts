import { AppDataSource } from '../data-source';
import { v4 as uuid } from 'uuid';
import { CreateUserService } from '../services/CreateUserService';

describe('CreateUserService', () => {
    beforeAll(async () => {
        const connection = await AppDataSource.initialize()
        await connection.runMigrations()
    })
    
    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy(); 
    })
    
    it('Deve retornar o ID do usuario criado', async () =>{
        const createUserService = new CreateUserService();

        const result = await createUserService.execute({
            id: uuid(),
            name: 'Algum usuario',
            email: 'email@email.com'
        })

        expect(result).toHaveProperty('id')
    })
})

// d603c5bf-2eac-436d-b6a8-8de102f65fc2