import prisma from '@/lib/prisma/client';
import type { IMessage } from '@/modules/hello/interface/IMessage';

export default class HelloModel {
  index = async (): Promise<IMessage[]> => {
    const messages = await prisma.message.findMany();
    return messages;
  };
}
