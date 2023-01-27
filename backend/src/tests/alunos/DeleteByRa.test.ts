import { StatusCodes } from "http-status-codes";
import { testServer, token } from "../jest.setup";


describe('Alunos - DeleteByRa',() => {

    it('Apaga registro', async () => {

       const res1 = await testServer
          .post('/alunos').set({Authorization: `Bearer ${token}`})
          .send({
            cpf: '118.218.366-08' ,
            email: 'andre@hotmail.com',
            nome: 'Andre',
            registroAcademico: 100235,
            })
        
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resApagada = await testServer
            .delete(`/alunos/${res1.body}`)
            .set({Authorization: `Bearer ${token}`}).send();

        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);    
    });

    it('Tenta apagar registro que não existe', async () => {

       const res1 = await testServer
          .delete('/alunos/99999').set({Authorization: `Bearer ${token}`}).send();
        
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
        
    });
});