import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Environment } from '../../environment';

interface IFerramentasDaListagemProps {
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    textoDaBusca?: string;
    aoClicarEmCadastrar?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  aoMudarTextoDeBusca,
  aoClicarEmCadastrar,
  textoDaBusca
}) => {
  const umDown = useMediaQuery ('(min-width:905px)');
  const doisDown = useMediaQuery ('(min-width:450px)');
  const tresDown = useMediaQuery ('(min-width:190px)');

  return (

    <Box  height={120} borderBottom='2px solid #000000'>

      <TextField sx={{paddingTop: '10px', paddingLeft:'10px', width: doisDown?'400px': tresDown ? '150px':'119px'}}
        inputProps={{sx:{height:'6px'}}} placeholder= {Environment.INPUT_DE_BUSCA} value={textoDaBusca}
        onChange = {(e) => aoMudarTextoDeBusca?.(e.target.value)} />

      <Button inputMode= 'search' variant='contained'
        sx={{
          boxShadow: 'none',
          textTransform: 'none',
          fontSize: 16,        
          height: '39px',
          width: umDown ?'110px': doisDown ? '70px' : '30px',
          lineHeight: 1.5,
          backgroundColor: '#cccccc',
          borderColor: '#cccccc',
          padding: '0px',
          marginTop: '10px',
          marginLeft: !umDown ? '1px' : '10px',
          ':hover':{
            backgroundColor: '#c3c3c3',
            borderColor: '#c3c3c3'
          }
        }} style={{minWidth:'30px'}}>

        { doisDown && ( <Typography variant='subtitle2' fontSize={umDown ? '16px': '13px'}>
              Pesquisar
        </Typography> )}
        {!doisDown && (
          <SearchIcon sx={{color:'#000000'}}/>
        )}
      </Button>

      <Button 
        sx={{
          marginLeft: !umDown ? '1px' : '47px',
          marginTop: '10px',
          boxShadow: 'none',
          textTransform: 'none',
          caretColor:'#ffffff',
          padding: '0px',
          width: umDown ? '165px' : doisDown ? '100px':'30px',
          height: '39px',
          lineHeight: 1.5,
          backgroundColor: '#999999',
          borderColor: '#999999',
        
          ':hover':{
            backgroundColor: '#969696',
            borderColor: '#969696'
          }
        }} onClick={aoClicarEmCadastrar} style={{minWidth:'30px'}}>

        { doisDown && ( <Typography variant='subtitle2' color='#ffffff' fontSize={umDown ? '16px': '13px'}>
              Cadastrar Aluno
        </Typography> )}
        {!doisDown &&(
          <AddIcon sx={{color:'#ffffff'}}/>
        )} 
      </Button>
    </Box>
  );

};