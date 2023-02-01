import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

interface ILayoutOfPage {
    menu?: React.ReactNode;
    titulo?: string;
    paginaResponsiva?: React.ReactNode;
    children?: React.ReactNode;
    children2?: React.ReactNode;
}

export const LayoutOfPageListagem : React.FC<ILayoutOfPage> = ({menu, titulo, paginaResponsiva, children, }) => {
  const smDown = useMediaQuery ('(min-width:240px)');


  

  return ( 
    
    <Box width="100vw" height="100vh" display="flex" flexDirection='row' alignItems="center" justifyContent="center">
      {menu}
      <Box width={750}  height={500} display="flex" flexDirection='column' border="2px solid #000000" bgcolor='#ffffff' borderRadius='0px 5px 0 0' >
        <Box display='flex' height={24} width='100%'  alignItems="center" justifyContent="center" borderBottom='2px solid #000000' bgcolor='#e6e6e6'>
          <Typography variant='body2' fontSize={smDown ? '16px' : '13px'} whiteSpace='nowrap' overflow='hidden' textOverflow='ellipses'>
            {titulo}
          </Typography>
        </Box>
        {paginaResponsiva}
        {children}
       
      </Box>
    </Box>
  );
};