import * as getByEmail from './getByEmail'
import * as create from './create'


export const usuariosProvider = {
    ...create,
    ...getByEmail,
   
};
