import { Request, Response } from "express";
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';
import { IAluno } from "../db/models";
import { AlunosProvider } from "../db/providers/alunos";

import { validation } from "../shared/middleware";


interface IParamProps {
    registroAcademico?: number;
}

interface IBodyProps extends Omit<IAluno, 'cpf' | 'registroAcademico'> {}

export const updateByRaValidation = validation((getSchema) =>( {
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3),
        email: yup.string().required().email().min(14),
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        registroAcademico: yup.number().integer().required().moreThan(0),
    })) 
}));

export const updateByRa = async (req:Request<IParamProps, {}, IBodyProps> , res:Response) => {

    if (!req.params.registroAcademico){
        return res.status (StatusCodes.BAD_REQUEST)
        .json({
            errors: {
                default: 'O parâmetro "Registro Acadêmico" precisa ser informado.'
            }
        });
    }

    const result = await AlunosProvider.updateByRa(req.params.registroAcademico, req.body);
    if (result instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
       errors:{ default: result.message}
    });
   }

    return res.status(StatusCodes.NO_CONTENT).json(result);
   }



