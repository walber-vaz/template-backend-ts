import prisma from '@/config/prisma/client';
import { Message } from '@prisma/client';

export default class HelloModel {
  index = async (): Promise<Message[]> => {
    const messages = await prisma.message.findMany();
    return messages;
  };
}
