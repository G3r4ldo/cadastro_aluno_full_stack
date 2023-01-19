import { Request, Response } from "express";
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';

import {db} from "../db/db";
import { Knex } from "../db/knex";
import { IAluno } from "../db/models";
import { validation } from "../shared/middleware";
import {AlunosProvider} from "../db/providers/alunos";



//se quiser omitir algum atributo como ID coloca interface IBodyProps extends Omit<IAluno, 'id'> {}
   interface IBodyProps extends IAluno{}

export const createValidation = validation((getSchema) =>( {
    body: getSchema<IBodyProps>(yup.object().shape({
        cpf: yup.string().required().min(14),
        email: yup.string().email().required(),
        nome: yup.string().strict().required().min(3),
        registroAcademico: yup.number().required(),
    })) 
}));

export const create = async (req:Request<{},{},IAluno> , res:Response) => {
    const result = await AlunosProvider.create(req.body);

    if (result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json ({
            errors: {
                default: result.message
            }
        });
    }
    return res.status(StatusCodes.CREATED).json(result);
   }



