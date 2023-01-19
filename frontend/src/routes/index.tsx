
import {Routes,Route, Navigate} from 'react-router-dom';
import { DetalheDeAluno } from '../pages/detalheAlunos/DetalheDeAluno';
import { ListagemDeAluno } from '../pages/listagemAlunos/ListagemDeAluno';



export const AppRoutes = () => {

  return (
        
    
    <Routes>

      <Route path="/listagem-de-alunos" element={<ListagemDeAluno/>}/>

      <Route path="/alunos/detalhe/novo" element={<DetalheDeAluno/>}/>

      <Route path='/alunos/detalhe/:registroAcademico' element = {<DetalheDeAluno/>} />

     	 <Route path="*" element={<Navigate to="/listagem-de-alunos" />}/>
        
        
    </Routes>
      
  );
};