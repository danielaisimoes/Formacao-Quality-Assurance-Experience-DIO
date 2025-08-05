import { AppDataSource } from "../data-source"
import { Usuario } from "../entities/Usuario"

interface IUser {
    id: string,
    name: string,
    email?: string,
}

class UpdateUserService {
    async execute({id, name, email}: IUser){
        const user = await AppDataSource.getRepository(Usuario)
        .createQueryBuilder()
        .update()
        .set({
            name: name,
            email: email
        })
        .where('id = :id', { id })
        .execute();
    
    console.log(user.raw)
    return user.raw
    }
}

export { UpdateUserService } 