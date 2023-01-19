import { LayoutOfPageListagem } from '../../shared/layouts/LayoutOfPageListagem';
import { LateralMenu } from '../../shared/components/lateral-menu/LateralMenu';
import { FerramentasDaListagem } from '../../shared/components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UseDebounce } from '../../shared/hooks';
import { useEffect, useMemo, useState } from 'react';
import { AlunosService, IListagemAluno } from '../../shared/api/alunos/AlunosService';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography, Button, TableFooter, LinearProgress, Pagination, Box } from '@mui/material';
import { Environment } from '../../shared/environment';


export const ListagemDeAluno: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {debounce} = UseDebounce(1000);


  const [rows, setRows] = useState<IListagemAluno[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const busca = useMemo(() =>{
    return searchParams.get('busca') || '';
  },[searchParams]);

  const pagina = useMemo(() =>{
    return Number(searchParams.get('pagina') || '1');
  },[searchParams]);
  
  useEffect(() => {
    setIsLoading(true);
    debounce (() => {

      AlunosService.getAll(pagina,busca)
        .then((result) => {
          setIsLoading(false);

          if (result instanceof Error){
            alert(result.message);     
          } else {
            console.log(result);
            setTotalCount(result.totalCount);
            setRows(result.data);
          }
        });
    });
  }, [busca, pagina]);


  const handleDelete = (registroAcademico: number) => {
    if(confirm('Realmente deseja apagar?')){
      AlunosService.deleteByRA(registroAcademico)
        .then(result => {
          if (result instanceof Error) {
            alert(result.message);
          } else {
            setRows(oldRows => [
              ...oldRows.filter(oldRow => oldRow.registroAcademico !== registroAcademico),
            ]);
            alert('Registro apagado com sucesso');
          }
        });
    }
  };

  return (
    <LayoutOfPageListagem menu= {<LateralMenu/>}
      titulo='Consulta de alunos'
      paginaResponsiva={<FerramentasDaListagem
        aoClicarEmCadastrar={ () => navigate ('/alunos/detalhe/novo')}
        textoDaBusca={busca}
        aoMudarTextoDeBusca={texto => setSearchParams({busca: texto, pagina: '1'}, {replace:true})}
      />}> 
      
      <Box display='flex' height={350}>
        <TableContainer component={Paper} variant= "outlined" >
          <Table
            sx={{
              padding: '20px',
              width: '100%',
              backgroundColor: '#ffffff',
              maxWidth: 800,
              wordBreak: 'break-all',
            }}>
            <TableHead
              sx={{
                height: 50,
                width: 800,
                backgroundColor: '#cccccc',
              }}>
              <TableRow>
                <TableCell sx={{fontSize: '16px',textAlign: 'center' }}>Registro acadêmico</TableCell>
                <TableCell sx={{fontSize: '16px',textAlign: 'center'}}>Nome</TableCell>
                <TableCell sx={{fontSize: '16px',textAlign: 'center'}}>CPF</TableCell>
                <TableCell sx={{fontSize: '16px',textAlign: 'center'}}>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.registroAcademico} sx={{background:'#ececec','&:nth-of-type(odd)':{background:'#ffffff'}}}>
                  <TableCell sx={{textAlign: 'center', padding:0.7 }}>
                    <Typography variant='body2' fontSize={16} color='#212121' padding={0}>{row.registroAcademico}</Typography></TableCell>
                  <TableCell sx={{textAlign: 'center', padding:0.7 }}>
                    <Typography variant='body2' fontSize={16} color='#212121' padding={0}>{row.nome}</Typography></TableCell>
                  <TableCell sx={{textAlign: 'center',padding:0.7 }}>
                    <Typography variant='body2' fontSize={16} color='#212121' padding={0}>{row.cpf}</Typography></TableCell>
                  <TableCell sx={{textAlign: 'center', padding:0.7}}><Button sx={{ textTransform: 'none', padding: 1}} onClick={() => navigate (`/alunos/detalhe/${row.registroAcademico}`)}>
                    <Typography variant='body2' fontSize={16} color='#212121'
                      sx ={{':hover':{color:'#000000', textDecorationLine:'underline'}}}>[ Editar ]</Typography></Button>
                  <Button sx={{ textTransform: 'none', padding: 0}} onClick={() => handleDelete(row.registroAcademico)}>
                    <Typography variant='body2' fontSize={16} color='#212121'
                      sx ={{':hover':{color:'#000000', textDecorationLine:'underline'}}}>[ Excluir ]</Typography></Button></TableCell> 
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              {totalCount===0 && !isLoading &&(
                <TableRow>
                  <TableCell colSpan={4} align='center'>{Environment.LISTAGEM_VAZIA}</TableCell>
                </TableRow>  
              )}
            </TableFooter>
            <TableFooter>
              {isLoading && (
                <TableRow>
                  <TableCell colSpan={4} sx={{p:0}}><LinearProgress variant='indeterminate'/></TableCell>
                </TableRow>
              )}
              {(totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS) && (
                <TableRow>
                  <TableCell colSpan={4}><Pagination
                    page={pagina}
                    count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)}
                    onChange={(_, newPage) => setSearchParams({busca, pagina: newPage.toString()}, {replace:true})}
                  /></TableCell>
                </TableRow>
              )}
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </LayoutOfPageListagem>
  );

};