import  { Router } from 'express';
import { usuariosController } from '../controllers';
import { AlunosController } from '../controllers/alunos';
import { ensureAuthenticated } from '../shared/middleware';

export const router = Router();



router.get('/alunos', ensureAuthenticated, AlunosController.getAllValidation, AlunosController.getAll);
router.post('/alunos', ensureAuthenticated, AlunosController.createValidation, AlunosController.create);
router.get('/alunos/:registroAcademico',  ensureAuthenticated,AlunosController.getByRaValidation, AlunosController.getByRa);
router.put('/alunos/:registroAcademico',  ensureAuthenticated,AlunosController.updateByRaValidation, AlunosController.updateByRa);
router.delete('/alunos/:registroAcademico', ensureAuthenticated, AlunosController.deleteByRaValidation, AlunosController.deleteByRa);


router.post('/cadastrar',  usuariosController.signUpValidation, usuariosController.signUp);
router.post('/entrar',  usuariosController.signInValidation, usuariosController.signIn);

