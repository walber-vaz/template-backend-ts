import HelloModel from '@/models/hello.model';

export class HelloService {
  private helloModel: HelloModel;
  constructor() {
    this.helloModel = new HelloModel();
  }

  index = async () => {
    const messages = await this.helloModel.index();
    return messages;
  };
}
