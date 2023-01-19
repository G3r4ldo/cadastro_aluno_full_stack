import knex from "knex";
import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IAluno } from "../../models";



export const getAll = async (page: number, limit: number, filter: string, registroAcademico = 0): Promise<IAluno[] | Error> => {

        try {
          const result = await Knex(ETableNames.aluno)
          .select('*')
          .where('registroAcademico', Number(registroAcademico))
          .orWhere('nome', 'like', `%${filter}%`)
          .orWhere('cpf', 'like', `%${filter}%`)
          .offset((page - 1) * limit)
          .limit(limit);

            if (registroAcademico > 0 && result.every(item => item.registroAcademico !== registroAcademico)){
              const resultByRa = await knex(ETableNames.aluno)
              .select('*')
              .where('registroAcademico', '=', registroAcademico)
              .first();

              if(resultByRa) return [...result, resultByRa]
            }

            return result;
        } catch (error) {
            console.log(error)
            return Error ('Erro ao atualizar o registro');
        }
};