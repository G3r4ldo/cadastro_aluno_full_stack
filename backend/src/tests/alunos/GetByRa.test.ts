import { StatusCodes } from "http-status-codes";
import { testServer, token } from "../jest.setup";


describe('Alunos - GetById',() => {

    it('Busca registro por ra', async () => {

       const res1 = await testServer
          .post('/alunos').set({Authorization: `Bearer ${token}`}).send({
            cpf: '118.218.366-08' ,
            email: 'andre@hotmail.com',
            nome: 'Andre',
            registroAcademico: 100235,
            })
        
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testServer
            .get(`/alunos/${res1.body}`)
            .set({Authorization: `Bearer ${token}`}).send();

        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);    
        expect(resBuscada.body).toHaveProperty('nome');    
    });

    it('Tenta apagar registro que não existe', async () => {

       const res1 = await testServer
          .get('/alunos/99999').set({Authorization: `Bearer ${token}`}).send();
        
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
        
    });
});