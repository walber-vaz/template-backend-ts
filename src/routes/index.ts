import { Router } from 'express';

import { helloRouter } from '@/modules/hello/router/hello.route';

const router = Router();

router.use('/hello', helloRouter);

export { router };
