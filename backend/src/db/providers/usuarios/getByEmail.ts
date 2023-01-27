import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IUsuario } from "../../models";



export const getByEmail = async (email: string): Promise<IUsuario | Error> => {

        try {
          const result = await Knex(ETableNames.usuario)
          .select('*')
          .where('email', '=', email)
          .first();

            if (result) return result;

            return Error ('Registro não encontrado');
        } catch (error) {
            console.log(error)
            return Error ('Erro ao consultar o registro');
        }
};