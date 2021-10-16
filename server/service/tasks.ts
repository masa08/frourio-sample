import { depend } from 'velona'
import { PrismaClient } from '@prisma/client'
import type { Task, Prisma } from '$prisma/client'
import { TaskRepo } from '$/infrastructure/Task'
import { prismaTaskRepo } from '$/prisma/implements/Task'

const client = new PrismaClient()
const taskRepo = new prismaTaskRepo(client)

export const getTasks = depend(
  { taskRepo: taskRepo as TaskRepo },
  ({ taskRepo }) => {
    return taskRepo.findMany()
  }
)

export const createTask = (label: Task['label']) =>
  client.task.create({ data: { label } })

export const updateTask = (
  id: Task['id'],
  partialTask: Prisma.TaskUpdateInput
) => client.task.update({ where: { id }, data: partialTask })

export const deleteTask = (id: Task['id']) =>
  client.task.delete({ where: { id } })
