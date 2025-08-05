import { AppDataSource } from "../data-source";
import { UpdateUserService } from "./UpdateUserService";
import { FakeData } from "../utils/FakeData";

describe('UpdateUserService', () => {
    beforeAll(async ()  => {
        const connection = await AppDataSource.initialize()
        await connection.runMigrations()
    })

    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy();
    })

    const fakeData = new FakeData();

    it('Deve editar o nome do usuário', async () => {
        const mockUser = await fakeData.createUser();
            
        const updateUserService = new UpdateUserService();

        const result = await updateUserService.execute({ 
            id: mockUser.id,
            name: 'Outro usuario'
        });
        
        expect(result).toHaveLength(0);
    
    })

})