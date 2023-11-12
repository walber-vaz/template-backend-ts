export interface IMessage {
  id?: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MessageCrud {
  index: () => Promise<IMessage[]>;
  create: (message: string) => Promise<IMessage>;
  update: (id: string, message: string) => Promise<IMessage>;
  delete: (id: string) => Promise<IMessage>;
}
