import { AppDataSource } from "../data-source";
import { GetAllUserService } from "./GetAllUserService";
import { FakeData } from "../utils/FakeData";
describe('GetAllUserService', () => {
    beforeAll(async () => {
        const connection = await AppDataSource.initialize()
        await connection.runMigrations()
    })

    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy();
    })

    const fakeData = new FakeData();

    it('Deve retornar todos os usuarios cadastrados', async ()=>{      
        await fakeData.execute();
        
        const expectedResponse = [
            {
                name: 'Algum usuario',
                email: 'email@email.com'
            },
            {
                name: 'Outro usuario',
                email: ''
            }
        ]

        const getAllUserService = new GetAllUserService();

        const result = await getAllUserService.execute();

        expect(result).toMatchObject(expectedResponse)
    
    })
})