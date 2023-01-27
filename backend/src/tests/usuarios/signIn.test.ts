import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe ('Usuários - SignIn', () => {
    beforeAll(async () => {
        await testServer.post('/cadastrar').send({
            senha:'1234567',
            nome: 'Andre da Silva',
            email: 'andre@hotmail.com',
        });
    });

    it('Faz login', async () => {
        const res1 = await testServer
        .post('/entrar')
        .send({
            senha:'1234567',
            email: 'andre@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.OK);
        expect(res1.body).toHaveProperty('accessToken');
    });
    it('Senha errada', async () => {
        const res1 = await testServer
        .post('/entrar')
        .send({
            senha:'123467',
            email: 'andre@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
        expect(res1.body).toHaveProperty('errors.default');
    });
    it('Email errado', async () => {
        const res1 = await testServer
        .post('/entrar')
        .send({
            senha:'1234567',
            email: 'andree@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
        expect(res1.body).toHaveProperty('errors.default');
    });
    it('Formato do email inválido', async () => {
        const res1 = await testServer
        .post('/entrar')
        .send({
            senha:'1234567',
            email: 'andrehotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.email');
    });
    it('Senha pequena', async () => {
        const res1 = await testServer
        .post('/entrar')
        .send({
            senha:'12',
            email: 'andre@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.senha');
    });
    it('Não informado senha', async () => {
        const res1 = await testServer
        .post('/entrar')
        .send({
            email: 'andre@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.senha');
    });
    it('Não informado email', async () => {
        const res1 = await testServer
        .post('/entrar')
        .send({
          
            senha:'1234567',
        });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.email');
    });
});
