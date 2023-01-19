import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IAluno } from "../../models";



export const create = async (aluno: IAluno): Promise<number | Error> => {


        try {
          const [result] = await Knex(ETableNames.aluno).insert(aluno).returning('registroAcademico');
            if (typeof result === 'object') {
                return result.registroAcademico
            } else if (typeof result === 'number') {
                return result;
            }

            return Error ('Erro ao cadastrar o registro');
        } catch (error) {
            console.log(error)
            return Error ('Erro ao cadastrar o registro');
        }
}