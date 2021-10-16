export interface TaskRepo {
  findMany(): Promise<Task[]>
}

export interface Task {
  id: number
  label: string
  done: boolean
}
