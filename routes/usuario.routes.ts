import { Router } from 'express';
import {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
} from '../controllers/usuarios.controller';
import { loguearRequest } from '../middlewares/utils';

const router = Router();

// You can validate body, query, or params attributes specifically.
// For example, query("expresion", "La expresion es requerida").not().isEmpty()
router.get('/', [loguearRequest], usuariosGet);
router.put('/:id', [loguearRequest], usuariosPut); // Passing parameters in the URL
router.post('/', [loguearRequest], usuariosPost);
router.delete('/', [loguearRequest], usuariosDelete);
router.patch('/', [loguearRequest], usuariosPatch);

export default router;