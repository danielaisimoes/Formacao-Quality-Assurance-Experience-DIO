import { AppDataSource } from "../data-source";
import { FakeData } from "../utils/FakeData";
import { DeleteUserService } from "./DeleteUserService";

describe('DeleteUserService', () => {
    beforeAll(async ()  => {
        const connection = await AppDataSource.initialize()
        await connection.runMigrations()
    })

    afterAll(async () => {
        await AppDataSource.destroy();
    })

    const fakeData = new FakeData();

    it('Deve retornar um array vazio quando um usuario for deletado', async () => {
        const mockUser = await fakeData.createUser();
        
        const deleteUserService = new DeleteUserService();

        const result = await deleteUserService.execute({ id: mockUser.id })
        
        expect(result).toHaveLength(0);
    })

})