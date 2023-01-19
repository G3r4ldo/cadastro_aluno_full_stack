import { Request, Response } from "express";
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';
import { AlunosProvider } from "../db/providers/alunos";
import { count } from "../db/providers/alunos/count";

import { validation } from "../shared/middleware";


interface IQueryProps {
    registroAcademico?: number;
    page?: number;
    limit?: number;
    filter?: string;
}

export const getAllValidation = validation((getSchema) =>( {
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().notRequired().moreThan(0),
        limit: yup.number().notRequired().moreThan(0),
        filter: yup.string().notRequired(),
        registroAcademico: yup.number().integer().notRequired().default(0),
       
    })) 
}));

export const getAll = async (req:Request<{},{},{}, IQueryProps > , res:Response) => {
    
   const result = await AlunosProvider.
   getAll(req.query.page || 1, req.query.limit || 7, req.query.filter || '', Number(req.query.registroAcademico));
   const count = await AlunosProvider.count(req.query.filter);

    if (result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {default: result.message}
        });
    } else if (count instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {default: count.message}
        });
    }
    
    res.setHeader('acces-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', count);

    return res.status(StatusCodes.OK).json(result);
};



