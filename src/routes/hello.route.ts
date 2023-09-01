import { Router } from 'express';

import { HelloController } from '@/controllers';

const helloRouter = Router();
const helloController = new HelloController();

helloRouter.get('/', helloController.getHello);

export { helloRouter };
