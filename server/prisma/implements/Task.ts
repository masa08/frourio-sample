import { Task, TaskRepo } from '$/infrastructure/Task'
import { PrismaClient } from '.prisma/client'

export class prismaTaskRepo implements TaskRepo {
  client: PrismaClient

  constructor(client: PrismaClient) {
    this.client = client
  }

  async findMany(): Promise<Task[]> {
    return await this.client.task.findMany()
  }
}
