
import { Box, Divider, ListItemText, Typography, useMediaQuery } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';




export const LateralMenu: React.FC = () => {

  const esconderMenu = useMediaQuery('(min-width:500px)');
  const smDown = useMediaQuery('(min-width:860px)');

  return (
    <>
      
      { esconderMenu && (
        <Box  display='flex' flexDirection='column' height={504} width={160}>
          <Box display='flex'  height={35} bgcolor='#999999' alignItems='center' justifyContent='center'>
            <Typography variant='subtitle2' color='#ffffff' fontSize={smDown ? '16px' : '13px'} whiteSpace='nowrap' overflow='hidden' textOverflow='ellipses'>
          Módulo Acadêmico
            </Typography>
          </Box>
          <Box display='flex' flexDirection='column' height={480} border='2px solid #000000' borderRight='0px' > 
            <List disablePadding>
              <ListItemButton sx={{backgroundColor:'#e6e6e6', padding:'0px', margin:'0px','&:hover': {backgroundColor:'#d6d6d6'}}}>
                <ListItemText sx={{marginLeft:'10px'}}>
                  <Typography variant='body2'  fontSize={16}>
                  Alunos
                  </Typography>
                </ListItemText>
              </ListItemButton>
              <Divider sx={{border:'1px solid #000000'}}/>
            </List>
          </Box>
        </Box>
      )}
      { !esconderMenu && (
        <>
          <Box  display='flex' flexDirection='column' height={504} width={35}>
            <Box display='flex'  height={35} bgcolor='#999999' alignItems='center' justifyContent='center'>
              <Typography variant='subtitle2' color='#ffffff' fontSize={16}>
          M
              </Typography>
            </Box>
            <Box display='flex' flexDirection='column' height={480} border='2px solid #000000' borderRight='0px'  > 
              <List disablePadding>
                <ListItemButton sx={{backgroundColor:'#e6e6e6', padding:'0px', margin:'0px', '&:hover': {backgroundColor:'#d6d6d6'}}}>
                  <GroupsIcon />
                </ListItemButton>
                <Divider sx={{border:'1px solid #000000'}}/>
              </List>
            </Box>
          </Box> 
        </>
      )}
    </>
  );
};

