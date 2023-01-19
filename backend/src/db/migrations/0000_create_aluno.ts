import { Knex } from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex) {
    return knex
    .schema
    .createTable(ETableNames.aluno, table => {
        table.string('nome', 150).unique().notNullable().index();
        table.string('email',150).notNullable();
        table.integer('registroAcademico').primary().unique().index().notNullable();
        table.string('cpf', 14).unique().notNullable().index();

        table.comment('Tabela usada para armazenar alunos do sistema.')
    }).then(() => {
        console.log(`# Created table ${ETableNames.aluno}`);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(ETableNames.aluno)
    .then(() => {
        console.log(`# Dropped table ${ETableNames.aluno}`);
    });
}




