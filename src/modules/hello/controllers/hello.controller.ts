import { type Request, type Response } from 'express';

import { HelloService } from '@/modules/hello/services';

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

  createHello = async (req: Request, res: Response): Promise<Response> => {
    const { message } = req.body;
    const newMessage = await this.helloService.create(message);
    return res.status(201).json({
      message: newMessage,
    });
  };

  deleteHello = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedMessage = await this.helloService.delete(id);
    return res.status(200).json({
      message: deletedMessage,
    });
  };

  updateHello = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { message } = req.body;
    const updatedMessage = await this.helloService.update(id, message);
    return res.status(200).json({
      message: updatedMessage,
    });
  };
}
