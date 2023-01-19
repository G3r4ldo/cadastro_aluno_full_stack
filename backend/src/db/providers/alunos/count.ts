import knex from "knex";
import { number } from "yup";
import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IAluno } from "../../models";



export const count = async (filter = ''): Promise<number | Error> => {

        try {
          const [{count}] = await Knex(ETableNames.aluno)
          .where('nome', 'like', `%${filter}%`)
          .count<[{ count: number}]>('* as count');


            if (Number.isInteger(Number(count))) return Number(count);
              
              return new Error ('Erro ao atualizar o registro');
        } catch (error) {
            console.log(error)
            return new Error ('Erro ao atualizar o registro');
        }
};
