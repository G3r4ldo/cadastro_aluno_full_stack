import { Request, Response } from "express";
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';


import { IUsuario } from "../../db/models";
import { validation } from "../../shared/middleware";
import {usuariosProvider} from "../../db/providers/usuarios";



//se quiser omitir algum atributo como ID coloca interface IBodyProps extends Omit<IUsuario, 'id'> {}
   interface IBodyProps extends Omit <IUsuario, 'id'>{ }

export const signUpValidation = validation((getSchema) =>( {
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().strict().required().min(3),
        email: yup.string().email().required().min(5).strict(),
        senha: yup.string().required().min(6),
       
    })) 
}));

export const signUp = async (req:Request<{},{},IBodyProps> , res:Response) => {
    const result = await usuariosProvider.create(req.body);

    if (result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json ({
            errors: {
                default: result.message
            }
        });
    }
    return res.status(StatusCodes.CREATED).json(result);
   }

