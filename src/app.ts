import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import { router } from './routes'

export default class App {
  app: express.Application

  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares(): void {
    this.app.use(
      express.json(),
      express.urlencoded({ extended: true }),
      helmet(),
      cors(),
      compression(),
    )
  }

  routes(): void {
    this.app.use('/api/v1', router)
  }
}

export const app = new App().app
