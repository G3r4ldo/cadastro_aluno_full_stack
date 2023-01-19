import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IAluno } from "../../models";



export const updateByRa = async (registroAcademico: number, aluno: Omit<IAluno, "cpf" | "registroAcademico">): Promise<void | Error> => {

        try {
          const result = await Knex(ETableNames.aluno)
          .update(aluno)
          .where('registroAcademico', '=', registroAcademico);

            if (result > 0) return;

            return Error ('Erro ao atualizar o registro');
        } catch (error) {
            console.log(error)
            return Error ('Erro ao atualizar o registro');
        }
};