import { AppDataSource } from "../data-source";
import { Request } from "express";
import { makeMockResponse } from "../utils/mocks/mockResponse";
import { UpdateUserController } from "./UpdateUserController";
import { FakeData } from "../utils/FakeData";

describe('UpdateUserController', () => {
    beforeAll(async () => {
        const connection = await AppDataSource.initialize()
        await connection.runMigrations()
    })

    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy();
    
    })

    const fakeData = new FakeData();

    it('Deve retornar status 204 quando o usuário for editado', async() => {
        const mockUser = await fakeData.createUser()
        
        const updateUserController = new UpdateUserController();

        const request = {
            body: {
                id: mockUser.id,
                name: 'Outro nome',
                email: 'email@email.com.br'
            }
        } as Request

        const response = makeMockResponse();

        await updateUserController.handle(request, response)

        expect(response.state.status).toBe(204)

    })
})