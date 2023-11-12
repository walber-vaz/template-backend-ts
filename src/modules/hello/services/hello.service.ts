import type { IMessage } from '@/modules/hello/interface/IMessage';
import { HelloModel } from '@/modules/hello/models/hello.model';

export class HelloService {
  private readonly helloModel: HelloModel;
  constructor() {
    this.helloModel = new HelloModel();
  }

  index = async (): Promise<IMessage[]> => {
    const messages = await this.helloModel.index();
    return messages;
  };

  create = async (message: string): Promise<IMessage> => {
    const newMessage = await this.helloModel.create(message);
    return newMessage;
  };

  delete = async (id: string): Promise<IMessage> => {
    const deletedMessage = await this.helloModel.delete(id);
    return deletedMessage;
  };

  update = async (id: string, message: string): Promise<IMessage> => {
    const updatedMessage = await this.helloModel.update(id, message);
    return updatedMessage;
  };
}
