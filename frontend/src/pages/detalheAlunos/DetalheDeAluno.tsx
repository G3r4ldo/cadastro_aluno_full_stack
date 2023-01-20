import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as yup from 'yup';
import React, { useEffect, useRef, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { AlunosService } from '../../shared/api/alunos/AlunosService';
import { FerramentasDeDetalhe, LateralMenu } from '../../shared/components';
import { VTextField } from '../../shared/forms';
import { LayoutOfPageDetalhe } from '../../shared/layouts/LayoutOfPageDetalhe';
import { Box, Grid, Typography } from '@mui/material';

interface IFormData {
  nome: string;
  email: string;
  cpf: string;
  registroAcademico: number;
}

const formValidationSchema: yup.SchemaOf<IFormData> = yup.object().shape({
  cpf: yup.string().required().min(14),
  email: yup.string().email().required(),
  nome: yup.string().strict().required().min(3),
  registroAcademico: yup.number().required(),
});

export const DetalheDeAluno: React.FC = () => {
  const navigate = useNavigate();
  const { registroAcademico = 'novo'} = useParams<'registroAcademico'>();
  
  const formRef = useRef<FormHandles>(null);
  const [nome, setNome] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isEdition, setIsEdition] = useState(false);

 
  const handleSave = (dados: IFormData) => {

    formValidationSchema.
      validate(dados, {abortEarly: false})
      .then((dadosValidados) => {
        
        setIsLoading(true);

        if (registroAcademico ==='novo') {
          AlunosService.create(dadosValidados)
            .then((result) => {
              setIsLoading(false);

              if(result instanceof Error){
                alert(result.message);
              } else {
                navigate('/alunos/listagem-de-alunos');
              }
            });
        } else {
          AlunosService.updateByRA(Number(registroAcademico),dadosValidados)
            .then((result) => {
              setIsLoading(false);
          
              if(result instanceof Error){
                alert(result.message);
              } else {
                confirm('Dados alterados com sucesso!');
                navigate('/alunos/listagem-de-alunos');
              }
            });
        }

      }).catch((errors: yup.ValidationError) => {
        const validationErrors: { [key: string]: string} = {};

        errors.inner.forEach(error => {
          if(!error.path) return;

          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      });
  };

  useEffect(() => {
    if (registroAcademico !== 'novo') {
      AlunosService.getById(Number(registroAcademico))
        .then((result) => {
          setIsLoading(false);
          setIsEdition(true);

          if (result instanceof Error){
            alert(result.message);
            navigate('/listagem-de-alunos');
          } else {
            setNome(result.nome);
            console.log(result);

            formRef.current?.setData(result);
          }
        });
    } else {
      setIsLoading(false);}
  }, [registroAcademico]);
  
  return (
    <LayoutOfPageDetalhe menu ={<LateralMenu/>}
      titulo={registroAcademico ==='novo' ? 'Cadastrar aluno' : 'Editar aluno: '+ nome} 
      paginaResponsiva={(<FerramentasDeDetalhe
        aoClicarEmCancelar={() => navigate ('/listagem-de-aluno')}
        aoClicarEmSalvar={() => formRef.current?.submitForm()}
      />)}>
            
        
      <Form ref={formRef} onSubmit={handleSave}>
        <Box display='flex' flexDirection='column' >


          <Grid container marginTop='60px' gap={3}>

            <Grid container item direction='row'>
              <Box display='flex'
                width={170}
                height={35}
                bgcolor='#eeeeee'
                marginLeft={3}
                border='1.5px solid #cccccc'
                borderRadius='5px 0 0 5px'
                alignItems='center'>
                <Typography color={'#000000'} variant='body2'  fontSize={16} marginLeft='20px'>
                Nome
                </Typography>
              </Box>
              <Grid item>
                <VTextField name='nome' sx={{ width: '450px'}} placeholder='Informe o nome completo' variant='standard' 
                  inputProps={{sx:{
                    padding:'0px',
                    height:'35px',
                    paddingLeft:'15px',
                    paddingRight:'15px',
                    border:'1.5px solid #d6d6d6',
                    borderRadius:'0px 5px 5px 0px'
                  }}}
                  InputProps={{disableUnderline:true}}>
                </VTextField>
              </Grid>
            </Grid>

            <Grid container item direction='row'>
              <Box display='flex'
                width={170}
                height={35}
                bgcolor='#eeeeee'
                marginLeft={3}
                border='1.5px solid #cccccc'
                borderRadius='5px 0 0 5px'
                alignItems='center'>
                <Typography color={'#000000'} variant='body2'  fontSize={16} marginLeft='20px'>
                E-mail
                </Typography>
              </Box>
              <Grid item>
                <VTextField name='email' sx={{ width: '450px'}} placeholder='Informe apenas um email' variant='standard' 
                  inputProps={{sx:{
                    padding:'0px',
                    height:'35px',
                    paddingLeft:'15px',
                    paddingRight:'15px',
                    border:'1.5px solid #d6d6d6',
                    borderRadius:'0px 5px 5px 0px'
                  }}}
                  InputProps={{disableUnderline:true}}>
                </VTextField>
              </Grid>
            </Grid>

            <Grid container item direction='row'>
              <Box display='flex'
                width={170}
                height={35}
                bgcolor='#eeeeee'
                marginLeft={3}
                border='1.5px solid #cccccc'
                borderRadius='5px 0 0 5px'
                alignItems='center'>
                <Typography color={'#000000'} variant='body2'  fontSize={16} marginLeft='20px'>
                RA
                </Typography>
              </Box>
              <Grid item>
                <VTextField name='registroAcademico' sx={{ width: '450px'}} placeholder='Informe o registro acadêmico' variant='standard' 
                  disabled={isLoading || isEdition} inputProps={{sx:{
                    padding:'0px',
                    height:'35px',
                    paddingLeft:'15px',
                    paddingRight:'15px',
                    border:'1.5px solid #d6d6d6',
                    borderRadius:'0px 5px 5px 0px'
                  }}}
                  InputProps={{disableUnderline:true}}>
                </VTextField>
              </Grid>
            </Grid>

            <Grid container item direction='row'>
              <Box display='flex'
                width={170}
                height={35}
                bgcolor='#eeeeee'
                marginLeft={3}
                border='1.5px solid #cccccc'
                borderRadius='5px 0 0 5px'
                alignItems='center'>
                <Typography color={'#000000'} variant='body2'  fontSize={16} marginLeft='20px'>
                CPF
                </Typography>
              </Box>
              <Grid item>
                <VTextField disabled={isLoading || isEdition} name='cpf' sx={{ width: '450px'}}
                  placeholder='Informe o número do documento' variant='standard' 
                  inputProps={{sx:{
                    padding:'0px',
                    height:'35px',
                    paddingLeft:'15px',
                    paddingRight:'15px',
                    border:'1.5px solid #d6d6d6',
                    borderRadius:'0px 5px 5px 0px'
                  }}}
                  InputProps={{disableUnderline:true}}>
                </VTextField>
              </Grid>
            </Grid>    
          </Grid>  
        </Box>
      </Form>
        
    </LayoutOfPageDetalhe>

  );
};