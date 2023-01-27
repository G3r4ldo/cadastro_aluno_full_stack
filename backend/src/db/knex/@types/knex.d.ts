import { IAluno, IUsuario } from "../../models";


declare module 'knex/types/tables'{
    interface Tables {
        aluno: IAluno;
        usuario: IUsuario;
    }
}