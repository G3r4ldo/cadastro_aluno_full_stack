import { LayoutOfPage } from '../../shared/layouts/LayoutOfPage';
import { LateralMenu } from '../../shared/components/lateral-menu/LateralMenu';
import { FerramentasDaListagem } from '../../shared/components';


export const ListagemDeAluno: React.FC = () => {

  return (
    <LayoutOfPage menu= {<LateralMenu/>}
      titulo='Consulta de alunos'
      paginaResponsiva={<FerramentasDaListagem/>}/>
  );

};