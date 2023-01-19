

import { Environment } from '../../environment';
import { Api } from '../axios-config';


export interface IListagemAluno {
  registroAcademico: number;
  nome: string;
  cpf: string;
}
export interface IDetalheAluno {
  nome: string;
  email: string;
  registroAcademico: number;
  cpf: string;
}

type TAlunoComTotalCount = {
  data: IListagemAluno[];
  totalCount:number;
}


const getAll = async (page = 1, filter = '') : Promise<TAlunoComTotalCount | Error> => {
  try{
    const urlRelativa = `/alunos?page=${page}&limit=${Environment.LIMITE_DE_LINHAS}&filter=${filter}`;

    const{data, headers} = await Api.get(urlRelativa);
    
    if(data){
      return{
        data,
        totalCount: Number ( headers ['x-total-count'] ),
      };
    }
    return new Error ('Erro ao listar os registros.');
  } catch (error){
    console.error(error);
    return new Error((error as {message:string}).message || 'Erro ao listar os registros.');
  }
};
 
const getById = async (registroAcademico:number): Promise<IDetalheAluno | Error> => {
  
  try{

    const{data} = await Api.get(`/alunos/${registroAcademico}`);

    if(data){
      return data;
    }
    return new Error ('Erro ao consultar o registro.');
  } catch (error){
    console.error(error);
    return new Error((error as {message:string}).message || 'Erro ao consultar o registro.');
  }
};

const create = async (dados:IDetalheAluno): Promise<number | Error> => {
  
  try{

    const{data} = await Api.post<IDetalheAluno> ('/cadastro', dados);

    if(data){
      return data.registroAcademico;
    }
    return new Error ('Erro ao criar o registro.');
  } catch (error){
    console.error(error);
    return new Error((error as {message:string}).message || 'Erro ao consultar o registro.');
  }
};

const updateByRA = async (registroAcademico: number, dados: IDetalheAluno): Promise<void | Error> => {
  
  try{
    await Api.put(`/alunos/${registroAcademico}`, dados);
  } catch (error){
    console.error(error);
    return new Error((error as {message:string}).message || 'Erro ao atualizar o registro.');
  }
};

const deleteByRA = async (registroAcademico: number): Promise<void | Error> => {
  
  try{
    await Api.delete(`/alunos/${registroAcademico}`);
  } catch (error){
    console.error(error);
    return new Error((error as {message:string}).message || 'Erro ao apagar o registro.');
  }
};

export const AlunosService = {
  getAll,
  getById,
  create,
  updateByRA,
  deleteByRA,
};