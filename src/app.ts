import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';

export default class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(
      express.json(),
      express.urlencoded({ extended: true }),
      helmet(),
      cors(),
      morgan('dev'),
      compression(),
    );
  }

  routes(): void {
    this.app.get('/', (req, res) => {
      res.json({ message: 'Hello World' }).status(200);
    });
  }
}

export const app = new App().app;
