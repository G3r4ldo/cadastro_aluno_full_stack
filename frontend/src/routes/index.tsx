
import {Routes,Route, Navigate} from 'react-router-dom';
import { ListagemDeAluno } from '../pages/listagemAlunos/ListagemDeAluno';



export const AppRoutes = () => {

  return (
        
    
    <Routes>

      <Route path="/pagina-inicial" element={<ListagemDeAluno/>}/>

     	 <Route path="*" element={<Navigate to="/pagina-inicial" />}/>
        
        
    </Routes>
      
  );
};