import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application, Request, Response } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Rest NodeJS',
      description: 'API Rest for user login with MongoDB',
      version: '1.0.0',
    },
  },
  apis: ['./docs/auth/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Application, port: string | number): void {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}

export { swaggerDocs };
