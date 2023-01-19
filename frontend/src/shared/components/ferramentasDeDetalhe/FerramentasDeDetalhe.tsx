import { Box, Button, Typography } from '@mui/material';
import React from 'react';


interface IFerramentasDeDetalheProps {

    aoClicarEmSalvar?: () => void,
    aoClicarEmCancelar: () => void,

}





export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  aoClicarEmCancelar,
  aoClicarEmSalvar
}) => {

  return (
    <Box display='flex' height='100%' width ='100%' flexDirection='column-reverse'  >
      <Box display='flex' height={120} flexDirection='row-reverse' alignItems='center' >
        <Button sx={{
          marginLeft: '20px',
          marginRight: '50px',
          boxShadow: 'none',
          textTransform: 'none',
          caretColor:'#ffffff',
          padding: '6px 12px',
          width: '100px',
          height: '50px',
          lineHeight: 1.5,
          backgroundColor: '#999999',
          borderColor: '#999999',
          ':hover':{
            backgroundColor: '#969696',
            borderColor: '#969696'
          }
        }} variant='contained' onClick={aoClicarEmSalvar}>
          <Typography variant='subtitle2' color='#ffffff' fontSize={19}>
              Salvar
          </Typography>
        </Button>
        <Button sx={{  
        
          boxShadow: 'none',
          textTransform: 'none',
          caretColor:'#ffffff',
          padding: '6px 12px',
          width: '100px',
          height: '50px',
          lineHeight: 1.5,
          backgroundColor: '#c0c0c0',
          borderColor: '#c0c0c0',
          ':hover':{
            backgroundColor: '#969696',
            borderColor: '#969696'
          }
        }}  variant='contained' onClick={aoClicarEmCancelar} >
          <Typography variant='subtitle2' color='#ffffff' fontSize={19}>
            Cancelar
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};