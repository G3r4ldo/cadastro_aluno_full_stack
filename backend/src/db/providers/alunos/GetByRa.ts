import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IAluno } from "../../models";



export const getByRa = async (registroAcademico: number): Promise<IAluno | Error> => {

        try {
          const result = await Knex(ETableNames.aluno)
          .select('*')
          .where('registroAcademico', '=', registroAcademico)
          .first();

            if (result) return result;

            return Error ('Registro não encontrado');
        } catch (error) {
            console.log(error)
            return Error ('Erro ao consultar o registro');
        }
};