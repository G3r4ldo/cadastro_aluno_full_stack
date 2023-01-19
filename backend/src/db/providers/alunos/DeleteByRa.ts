import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";



export const deleteByRa = async (registroAcademico: number): Promise<void | Error> => {

        try {
          const result = await Knex(ETableNames.aluno)
          .where('registroAcademico', '=', registroAcademico)
          .del();

            if (result > 0 ) return;

            return Error ('Erro ao apagar o registro');
        } catch (error) {
            console.log(error)
            return Error ('Erro ao apagar o registro');
        }
};