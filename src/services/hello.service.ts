import HelloModel from '@/models/hello.model';
import { type IMessage } from '@/types/IMessage';

export class HelloService {
  private readonly helloModel: HelloModel;
  constructor() {
    this.helloModel = new HelloModel();
  }

  index = async (): Promise<IMessage[]> => {
    const messages = await this.helloModel.index();
    return messages;
  };
}
