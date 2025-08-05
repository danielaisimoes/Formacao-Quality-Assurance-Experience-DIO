import { CreateUserService } from '../services/CreateUserService';
import { v4 as uuid } from 'uuid';

class FakeData{
    createUserService = new CreateUserService();

    async execute(){
        await this.createUserService.execute({
            id: uuid(),
            name: 'Algum usuario',
            email: 'email@email.com'
        })

        await this.createUserService.execute({
            id: uuid(),
            name: 'Outro usuario',
            email: ''
        })

    }

    async createUser(){
        const user = await this.createUserService.execute({
            id: uuid(),
            name: 'Algum usuario',
            email: 'email@email.com'
        })
        
        return user
    }
}

export{ FakeData }