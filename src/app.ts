import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import { helloRouter } from './routes';

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
    this.app.use('/', helloRouter);
  }
}

export const app = new App().app;
