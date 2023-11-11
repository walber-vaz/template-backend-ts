import type { IMessage } from '@/modules/hello/interface/IMessage';
import HelloModel from '@/modules/hello/models/hello.model';

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
