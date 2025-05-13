import prismaClient from "../prisma";



class GetLastMessagesService {
  async execute() {

    const messages = await prismaClient.message.findMany({
      take: 5,
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: true
      }
    });

    return messages;
  }
}

export { GetLastMessagesService }