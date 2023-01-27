import supertest from "supertest";
import { Knex } from "../db/knex";
import { app } from "../server/Server";


beforeAll(async () =>{
 await Knex.migrate.latest();

});

export let token = '';
beforeAll (async () => {
    const email = 'createalunos@gmail.com';
    await testServer.post('/cadastrar').send({nome:'Testando', email, senha:'1234567'});
    const signInRes = await testServer.post('/entrar').send({senha:'1234567', email})

     token = signInRes.body.accessToken;
});

afterAll(async () =>{
    await Knex.destroy();
})

export const testServer = supertest(app);