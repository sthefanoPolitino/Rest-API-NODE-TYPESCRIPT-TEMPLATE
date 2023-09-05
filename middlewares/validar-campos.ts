import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
const validarCampos = (req: Request, res: Response, next: NextFunction) => {
  const erroresDeValidacion = validationResult(req);

  if (!erroresDeValidacion.isEmpty()) {
    return res.status(400).json(erroresDeValidacion.array());
  }

  next();
};

export default validarCampos;
