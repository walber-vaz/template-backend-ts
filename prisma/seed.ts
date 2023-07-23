import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'node:crypto';
const prisma = new PrismaClient();

async function main() {
  const messages = await prisma.message.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      id: randomUUID(),
      message: 'Hello World!',
    },
  });
  console.log(messages);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
