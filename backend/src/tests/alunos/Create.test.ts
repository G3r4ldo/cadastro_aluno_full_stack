import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Alunos - Create',() => {

    it('Cria registro', async () => {

       const res1 = await testServer
          .post('/alunos').send({
            cpf: '118.218.366-08' ,
            email: 'andre@hotmail.com',
            nome: 'Andre',
            registroAcademico: 100235,
            })
        
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');    
    });

    it('Tenta criar um registro com CPF/nome curto, email sem @, RA formato string', async () => {

       const res1 = await testServer
          .post('/alunos').send({
            cpf: '118.218.366-0' ,
            email: 'andrehotmail.com',
            nome: 12345,
            registroAcademico: 'mane',
            })
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.cpf');
        expect(res1.body).toHaveProperty('errors.body.email');
        expect(res1.body).toHaveProperty('errors.body.nome');
        expect(res1.body).toHaveProperty('errors.body.registroAcademico');
    });
    it('Tenta criar um registro sem dados', async () => {

       const res1 = await testServer
          .post('/alunos').send({
            cpf: '' ,
            email: '',
            nome: '',
            registroAcademico: '',
            })
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.cpf');
        expect(res1.body).toHaveProperty('errors.body.email');
        expect(res1.body).toHaveProperty('errors.body.nome');
        expect(res1.body).toHaveProperty('errors.body.registroAcademico');
    });

});