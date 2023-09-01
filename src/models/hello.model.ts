import prisma from '@/config/prisma/client';
import type { IMessage } from '@/types/IMessage';

export default class HelloModel {
  index = async (): Promise<IMessage[]> => {
    const messages = await prisma.message.findMany();
    return messages;
  };
}
