import prisma from '@/lib/prisma/client';
import type { IMessage, MessageCrud } from '@/modules/hello/interface/IMessage';

export class HelloModel implements MessageCrud {
  index = async (): Promise<IMessage[]> => {
    const messages = await prisma.message.findMany();
    return messages;
  };

  create = async (message: string): Promise<IMessage> => {
    const newMessage = await prisma.message.create({
      data: {
        message,
      },
    });
    return newMessage;
  };

  delete = async (id: string): Promise<IMessage> => {
    const deletedMessage = await prisma.message.delete({
      where: {
        id,
      },
    });
    return deletedMessage;
  };

  update = async (id: string, message: string): Promise<IMessage> => {
    const updatedMessage = await prisma.message.update({
      where: {
        id,
      },
      data: {
        message,
      },
    });
    return updatedMessage;
  };
}
