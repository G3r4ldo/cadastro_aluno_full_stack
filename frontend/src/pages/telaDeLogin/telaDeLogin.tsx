import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { LayoutOfPageListagem } from '../../shared/layouts/LayoutOfPageListagem';



export const TelaDeLogin : React.FC = () => {


  return (
    <LayoutOfPageListagem titulo='Login' >

      <Box height={430} width='100%' display='flex' alignContent='center' justifyContent='center' flexDirection='column'>

        <Grid container gap={3} alignContent='center' >
          <Grid container item direction='row' justifyContent='center'>
            <Box display='flex'
              width={80}
              height={35}
              bgcolor='#afafaf'
              marginLeft={3}
              border='1.5px solid #9c9c9c'
              borderRadius='5px 0 0 5px'
              alignItems='center'>
              <Typography color={'#000000'} variant='body2'  fontSize={16} marginLeft='20px'>
                Email
              </Typography></Box>
            <Box> <Grid item>
              <TextField sx={{ width: '300px'}} placeholder='Informe o email' variant='standard' 
                inputProps={{sx:{
                  padding:'0px',
                  height:'35px',
                  paddingLeft:'15px',
                  paddingRight:'15px',
                  border:'1.5px solid #cccccc',
                  borderRadius:'0px 5px 5px 0px'
                }}}
                InputProps={{disableUnderline:true}}>
              </TextField>
            </Grid></Box>

            
          </Grid>
          <Grid container item direction='row' justifyContent='center'>
            <Box display='flex'
              width={80}
              height={35}
              bgcolor='#afafaf'
              marginLeft={3}
              border='1.5px solid #9c9c9c'
              borderRadius='5px 0 0 5px'
              alignItems='center'>
              <Typography color={'#000000'} variant='body2'  fontSize={16} marginLeft='20px'>
                Senha
              </Typography></Box>
            <Box> <Grid item>
              <TextField sx={{ width: '300px'}} placeholder='Informe a senha' type='password' variant='standard' 
                inputProps={{sx:{
                  padding:'0px',
                  height:'35px',
                  paddingLeft:'15px',
                  paddingRight:'15px',
                  border:'1.5px solid #cccccc',
                  borderRadius:'0px 5px 5px 0px'
                }}}
                InputProps={{disableUnderline:true}}>
              </TextField>
            </Grid></Box>

                        
          </Grid>
          <Grid container item direction='row' justifyContent='flex-end' marginRight={16}>
            <Button sx={{
              marginLeft: '20px',
              marginRight: '50px',
              boxShadow: 'none',
              padding: '6px 12px',
              width: '80px',
              height: '37px',
              lineHeight: 1.5,
              backgroundColor: '#afafaf',
              borderColor: '#999999',
              ':hover':{
                backgroundColor: '#a1a1a1',
                borderColor: '#969696'
              }
            }}>
              <Typography color={'#000000'} variant='body2'  fontSize={16} >
                Entrar
              </Typography></Button>
           

          </Grid>
        </Grid>

      </Box>
      <Box width='100%' display='flex' justifyContent='flex-end' alignItems='end'>
        <Typography color={'#000000'} variant='body2'  fontSize={14} >
                Ainda não é cadastrado?
        </Typography>
        <Button sx={{
          marginLeft: '15px',
          marginRight: '20px',
          boxShadow: 'none',
          padding: '6px 12px',
          width: '100px',
          height: '30px',
          lineHeight: 1.5,
          backgroundColor: '#afafaf',
          borderColor: '#999999',
          ':hover':{
            backgroundColor: '#a1a1a1',
            borderColor: '#969696'
          }
        }}>
          <Typography color={'#000000'} variant='body2'  fontSize={14} >
                Cadastrar
          </Typography></Button> </Box>




    </LayoutOfPageListagem>
  );

};