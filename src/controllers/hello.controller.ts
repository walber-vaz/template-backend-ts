import { type Request, type Response } from 'express';

import { HelloService } from '@/services';

export class HelloController {
  private readonly helloService: HelloService;
  constructor() {
    this.helloService = new HelloService();
  }

  getHello = async (_req: Request, res: Response): Promise<Response> => {
    const hello = await this.helloService.index();
    return res.status(200).json({
      message: hello,
    });
  };
}
