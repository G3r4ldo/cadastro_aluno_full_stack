
//export * from '../controllers';


import * as create from './Create'
import * as getAll from './GetAll'
import * as getByRa from './GetByRa'
import * as updateByRa from './UpdateByRa'
import * as deleteByRa from './DeleteByRa'
import * as count from './count'

export const AlunosProvider = {
    ...create,
    ...getAll,
   ...getByRa,
   ...updateByRa,
   ...deleteByRa,
   ...count,
};
