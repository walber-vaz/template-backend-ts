import { HelloService } from '@/services';
import { Request, Response } from 'express';

export class HelloController {
  private helloService: HelloService;
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
