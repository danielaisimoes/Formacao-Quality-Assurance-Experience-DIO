import { AppDataSource } from '../data-source';
import { CreateUserController  } from './CreateUserController';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';

describe('CreateUserController', () => {
    beforeAll(async () => {
        const connection = await AppDataSource.initialize()
        await connection.runMigrations()
    })
    
    afterAll(async () => {
        if (AppDataSource.isInitialized) {        
            await AppDataSource.query('DELETE FROM usuarios');
            await AppDataSource.destroy();
    
        }
    })

    const createUserController = new CreateUserController();

    const response = makeMockResponse()

   it("Deve retornar status 201 quando o usuário for criado", async() =>{
    const request = {
        body: {
            name: 'Algum usuario',
            email: 'email@email.com'
        }
    } as Request

    await createUserController.handle(request, response)

    expect(response.state.status).toBe(201)
    })

    it('Deve retornar status 400 quando o nome não for informado', async() => {
        const request = {
        body: {
            name: '',
            email: 'email@email.com'
        }
    } as Request

    await createUserController.handle(request, response)

    expect(response.state.status).toBe(400)
    })

    it('Deve retornar status 201 quando o email não for informado', async() => {
        const request = {
        body: {
            name: 'Algum usuario',
            email: ''
        }
    } as Request
    
    await createUserController.handle(request, response)

    expect(response.state.status).toBe(201)

    })
})
