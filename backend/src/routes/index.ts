import  { Router } from 'express';
import { AlunosController } from '../controllers';

export const router = Router();



router.get('/alunos', AlunosController.getAllValidation, AlunosController.getAll);
router.post('/cadastro', AlunosController.createValidation, AlunosController.create);
router.get('/alunos/:registroAcademico', AlunosController.getByRaValidation, AlunosController.getByRa);
router.put('/alunos/:registroAcademico', AlunosController.updateByRaValidation, AlunosController.updateByRa);
router.delete('/alunos/:registroAcademico', AlunosController.deleteByRaValidation, AlunosController.deleteByRa);

