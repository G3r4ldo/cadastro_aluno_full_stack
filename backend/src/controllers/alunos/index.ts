
export * from '.';
import * as create from './Create'
import * as getAll from './GetAll'
import * as getByRa from './GetByRa'
import * as updateByRa from './UpdateByRa'
import * as deleteByRa from './DeleteByRa'

export const AlunosController = {
    ...create,
    ...getAll,
    ...getByRa,
    ...updateByRa,
    ...deleteByRa,
    

};

