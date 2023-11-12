import { Router } from 'express';

import { HelloController } from '@/modules/hello/controllers';

const helloRouter = Router();
const helloController = new HelloController();

helloRouter.get('/message', helloController.getHello);
helloRouter.post('/message', helloController.createHello);
helloRouter.delete('/message/:id', helloController.deleteHello);
helloRouter.put('/message/:id', helloController.updateHello);

export { helloRouter };
