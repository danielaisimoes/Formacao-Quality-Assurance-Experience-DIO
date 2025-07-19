import { Request } from 'express'
import { makeMockResponse } from '../mocks/mockResponse';
import { UsersController } from "./usersController";
import { mock } from 'node:test';

describe('Users Controller', ()=> {
    const usersController = new UsersController();

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()

    it('Deve listar os nossos usuários', ()=>{
        usersController.listarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(2)
    }) 

    it('Deve criar um novo usuário', ()=>{
        mockRequest.body={
            name: 'novo usuário'
        }
        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({'mensagem': `usuario novo usuário criado`})
    })

    it('Não deve criar um usuário com nome em branco', ()=>{
        mockRequest.body = {
            name: ''
        }

        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({mensagem: 'Não é possivel criar usuários sem um nome'})
    })
})