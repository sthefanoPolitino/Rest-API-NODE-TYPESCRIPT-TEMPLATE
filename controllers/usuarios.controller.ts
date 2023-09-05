import { Request, Response } from 'express';

const usuariosGet = (req: Request, res: Response) => {
  // Example: api/usuarios?nombre=sthefano&apikey=1231
  // Destructuring allows us to provide default values if properties are missing.
  const { nombre = 'Sin nombre', apikey } = req.query as { nombre?: string; apikey?: string };

  res.status(200).json({
    msg: 'get API',
    nombre,
    apikey,
  });
};

const usuariosPost = (req: Request, res: Response) => {
  const { nombre, edad } = req.body;

  res.status(200).json({
    nombre,
    edad,
  });
};

const usuariosPut = (req: Request, res: Response) => {
  const id = req.params.id;

  res.status(200).json({
    msg: 'put API',
    id,
  });
};

const usuariosDelete = (req: Request, res: Response) => {
  res.status(200).json({
    msg: 'delete API',
  });
};

const usuariosPatch = (req: Request, res: Response) => {
  res.status(200).json({
    msg: 'patch API',
  });
};

export { usuariosGet, usuariosPatch, usuariosPost, usuariosPut, usuariosDelete };
