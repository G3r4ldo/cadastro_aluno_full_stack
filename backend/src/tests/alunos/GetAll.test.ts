import { StatusCodes } from "http-status-codes";
import { testServer, token } from "../jest.setup";


describe('Alunos - GetAll',() => {

    it('Buscar todos os registros', async () => {

       const res1 = await testServer
          .post('/alunos').set({Authorization: `Bearer ${token}`}).send({
            cpf: '118.218.366-08' ,
            email: 'andre@hotmail.com',
            nome: 'Andre',
            registroAcademico: 100235,
            })
        
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
      
        const resBuscada = await testServer
        .get('/alunos').set({Authorization: `Bearer ${token}`}).send()

        expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        expect (resBuscada.body.length).toBeGreaterThan(0)
    });
});