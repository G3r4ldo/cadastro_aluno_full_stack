import { Request, Response } from "express";
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';
import { AlunosProvider } from "../../db/providers/alunos";

import { validation } from "../../shared/middleware";


interface IParamProps {
    registroAcademico?: number;
}

export const deleteByRaValidation = validation((getSchema) =>( {
    params: getSchema<IParamProps>(yup.object().shape({
        registroAcademico: yup.number().integer().required().moreThan(0),
    })) 
}));

export const deleteByRa = async (req:Request<IParamProps> , res:Response) => {
    
    if(!req.params.registroAcademico) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors:{
                default: 'O parâmetro "registro acadêmico" precisa ser informado.'
            }
        });
    }

    const result = await AlunosProvider.deleteByRa(req.params.registroAcademico);
    if (result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }
    return res.status(StatusCodes.NO_CONTENT).send();
   }



