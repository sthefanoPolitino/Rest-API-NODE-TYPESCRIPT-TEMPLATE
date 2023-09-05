import express, { Application } from 'express';
import { swaggerDocs } from '../swager';
import cors from 'cors';
import routes from '../routes/usuario.routes'

class Server {
  public app: Application;
  public port: string | number;
  public usuariosRoutePath: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usuariosRoutePath = '/api/usuarios';

    // Middlewares
    this.middlewares();
    // Routes
    this.routes();
  }

  private middlewares(): void {
    this.app.use(cors());
    // Parsing JSON request bodies
    this.app.use(express.json());
    // Serving static files from the 'public' directory
    this.app.use(express.static('public'));
  }

  private routes(): void {
    this.app.use(this.usuariosRoutePath, routes);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });

    swaggerDocs(this.app, this.port);
  }
}

export default Server;
