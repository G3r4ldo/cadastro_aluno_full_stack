import supertest from "supertest";
import { Knex } from "../db/knex";
import { app } from "../server/Server";

beforeAll(async () =>{
 await Knex.migrate.latest();
});

afterAll(async () =>{
    await Knex.destroy();
})

export const testServer = supertest(app);