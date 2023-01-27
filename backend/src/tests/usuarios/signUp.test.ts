import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe ('Usuário - SignUp', () => {

    it('Cadastra usuário 1', async () => {
        const res1 = await testServer
        .post('/cadastrar')
        .send({
            senha:'1234567',
            nome: 'Andre da Silva',
            email: 'andre@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');
    });
    it('Cadastra usuário 2', async () => {
        const res1 = await testServer
        .post('/cadastrar')
        .send({
            senha:'1234567',
            nome: 'Andre Antonio',
            email: 'andreantonio@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');
    });
    it('Erro ao cadastrar um usuário com email duplicado', async () => {
        const res1 = await testServer
        .post('/cadastrar')
        .send({
            senha:'1234567',
            nome: 'Andre Antonio',
            email: 'andreantoniodup@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');

        const res2 = await testServer
        .post('/cadastrar')
        .send({
            senha:'1234567',
            nome: 'Andre da Silva',
            email: 'andreantoniodup@hotmail.com',
        })
        expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res2.body).toHaveProperty('errors.default');
    });
    it('Erro ao cadastrar um usuário sem email', async () => {
        const res1 = await testServer
        .post('/cadastrar')
        .send({
            senha:'1234567',
            nome: 'Andre Antonio',
        });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.email');
    });
    it('Erro ao cadastrar um usuário sem nome', async () => {
        const res1 = await testServer
        .post('/cadastrar')
        .send({
            senha:'1234567',
            email: 'andreantonio@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });
    it('Erro ao cadastrar um usuário sem senha', async () => {
        const res1 = await testServer
        .post('/cadastrar')
        .send({
           // senha:'1234567',
            nome: 'Andre Antonio',
            email: 'andreantonio@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.senha');
    });
    it('Erro ao cadastrar um email inválido', async () => {
        const res1 = await testServer
        .post('/cadastrar')
        .send({
            senha:'1234567',
            nome: 'Andre Antonio',
            email: 'andreantoniohotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.email');
    });
    it(' Erro ao cadastrar um nome pequeno', async () => {
        const res1 = await testServer
        .post('/cadastrar')
        .send({
            senha:'1234567',
            nome: 'An',
            email: 'andreantonio@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });
    it(' Erro ao cadastrar uma senha pequena', async () => {
        const res1 = await testServer
        .post('/cadastrar')
        .send({
            senha:'167',
            nome: 'Andre Antonio',
            email: 'andreantonio@hotmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.senha');
    });
});