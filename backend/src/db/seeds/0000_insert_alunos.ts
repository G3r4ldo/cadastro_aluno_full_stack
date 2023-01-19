import  {Knex} from 'knex'

import {ETableNames} from '../ETableNames'


export const seed = async (knex: Knex) => {
    
    const [{count}] = await knex (ETableNames.aluno).count <[{count: number}]>('* as count');

    if (!Number.isInteger(count) || Number(count)> 0) return;

    const alunosToInsert = alunos;
    await knex(ETableNames.aluno).insert(alunosToInsert);

};

const alunos = [
    {
        nome: 'Lucas',
        cpf: '145.125.689-22',
        registroAcademico: 111225,
        email: 'lucas@hotmail.com'
    },
    {
        nome: 'Andre',
        cpf: '156.125.689-22',
        registroAcademico: 222654,
        email: 'andre@hotmail.com'
    },
    {
        nome: 'Marcos',
        cpf: '157.125.689-22',
        registroAcademico: 222658,
        email: 'andre@hotmail.com'
    },
    {
        nome: 'João',
        cpf: '158.125.689-22',
        registroAcademico: 222156,
        email: 'andre@hotmail.com'
    },
    {
        nome: 'Maria',
        cpf: '159.125.689-22',
        registroAcademico: 226549,
        email: 'andre@hotmail.com'
    },
    {
        nome: 'Ana Maria',
        cpf: '156.121.689-22',
        registroAcademico: 254987,
        email: 'andre@hotmail.com'
    },
    {
        nome: 'Luíza',
        cpf: '156.122.689-22',
        registroAcademico: 22187,
        email: 'andre@hotmail.com'
    },
    {
        nome: 'Carla Antonia',
        cpf: '156.123.689-22',
        registroAcademico: 298763,
        email: 'andre@hotmail.com'
    },
    {
        nome: 'Sebastiana da silva',
        cpf: '156.125.687-22',
        registroAcademico: 34987651,
        email: 'andre@hotmail.com'
    },
    {
        nome: 'Lucas Caralho',
        cpf: '156.124.689-22',
        registroAcademico: 26549,
        email: 'andre@hotmail.com'
    },
    {
        nome: 'Diana dos Antônios',
        cpf: '156.127.689-22',
        registroAcademico: 36542987,
        email: 'andre@hotmail.com'
    },
    {
        nome: 'Juliana Afonsa',
        cpf: '156.128.689-22',
        registroAcademico: 654987,
        email: 'andre@hotmail.com'
    },
    {
        nome: 'Tonico do Tinoco',
        cpf: '156.129.689-22',
        registroAcademico: 3216976,
        email: 'andre@hotmail.com'
    },
]