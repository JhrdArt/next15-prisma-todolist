'use server'
import { Task } from '@/data/data'
import prisma from '@/lib/prisma'
import { TaskForDB } from '@/types/types'

export async function createTask ({ label, priority, status, title }: TaskForDB) {
  try {
    if (!label || !priority || !status || !title) return
    const task = await prisma.task.create({
      data: {
        label,
        priority,
        status,
        title
      }
    })

    return task
  } catch (error) {
    console.error(`Error guardando los datos: ${error}`)
  }
}

export async function getTasks () {
  const tasks = await prisma.task.findMany()
  return tasks
}
