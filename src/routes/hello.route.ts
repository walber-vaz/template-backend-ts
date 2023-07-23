import { HelloController } from '@/controllers';
import { Router } from 'express';

const helloRouter = Router();
const helloController = new HelloController();

helloRouter.get('/', helloController.getHello);

export { helloRouter };
