import { AppDataSource } from "../data-source"
import { Usuario } from "../entities/Usuario"

interface IUser {
    id: string,
}

class DeleteUserService {
    async execute({ id }: IUser){
        const user = await AppDataSource.getRepository(Usuario)
            .createQueryBuilder()
            .delete()
            .from(Usuario)
            .where('id = :id', { id })
            .execute();
    
        console.log(user);
        return user.raw
    }
}

export { DeleteUserService }