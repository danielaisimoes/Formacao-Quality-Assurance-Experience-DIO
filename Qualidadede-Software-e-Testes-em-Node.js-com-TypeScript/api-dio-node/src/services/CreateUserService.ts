import { AppDataSource } from "../data-source";
import { Usuario } from "../entities/Usuario";
interface IUsuario {
    id: string,
    name: string,
    email?: string
}

class CreateUserService {
    async execute({id, name, email}: IUsuario){
      
        const usuario = await AppDataSource.getRepository(Usuario)
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values([
                { 
                    id: id,
                    name: name,
                    email: email
                },
            ])
            .execute();

        console.log(usuario.identifiers[0])

        return usuario.identifiers[0]
    }
}

export { CreateUserService }