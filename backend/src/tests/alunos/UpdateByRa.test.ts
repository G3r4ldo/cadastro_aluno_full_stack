import { StatusCodes } from "http-status-codes";
import { testServer, token } from "../jest.setup";


describe('Alunos - UpdateByRa',() => {

    it('Atualiza o registro', async () => {

       const res1 = await testServer
          .post('/alunos').set({Authorization: `Bearer ${token}`}).send({
            cpf: '118.218.366-08' ,
            email: 'andre@hotmail.com',
            nome: 'Andre',
            registroAcademico: 100235,
            })
        
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testServer
            .put(`/alunos/${res1.body}`)
            .set({Authorization: `Bearer ${token}`}).send({
                nome: 'Lucas',
                email: 'lucas@hotmail.com'
            });

        expect(resBuscada.statusCode).toEqual(StatusCodes.NO_CONTENT);    
  
    });

    it('Tenta atualizar registro que não existe', async () => {

       const res1 = await testServer
          .put('/alunos/99999').set({Authorization: `Bearer ${token}`}).send({
            nome: 'Andre',
            email: 'andre@hotmail.com'
          });
        
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
        
    });
});