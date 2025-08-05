import { AppDataSource } from "../data-source";
import { makeMockRequest } from "../utils/mocks/mockRequest";
import { makeMockResponse } from "../utils/mocks/mockResponse";
import { GetAllUserController } from "./GetAllUserController";
import { FakeData } from "../utils/FakeData";

describe('GetAllUserController', () => {
    beforeAll(async () => {
        const connection = await AppDataSource.initialize()
        await connection.runMigrations()
    })

    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy();
    
    })

    const fakeData = new FakeData();

    it('Deve retornar status 200 quando pegar todos os usuarios', async () => {
        await fakeData.execute();

        const getAllUserController = new GetAllUserController();
    
        const request = makeMockRequest({});
        const response = makeMockResponse();
    
        await getAllUserController.handle(request, response);
    
        expect(response.state.status).toBe(200);
    
    })




})