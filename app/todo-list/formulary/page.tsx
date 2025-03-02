'use client'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import React, { ChangeEvent, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { SelectOptions } from '@/components/select-optionts'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { createTask } from '@/actions/task-actions'
import { redirect } from 'next/navigation'
import { priorities, statuses } from '@/data/data'

export const taskSchema = z.object({
  title: z.string().min(1, { message: 'No empty' }).nonempty(),
  status: z.string(),
  label: z.string().min(1, { message: 'No empty' }).nonempty(),
  priority: z.string()
})

export type Task = z.infer<typeof taskSchema>

export default function Formulary () {
  const form = useForm<Task>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: '',
      label: '',
      priority: '',
      status: ''
    }
  })
  const onSubmit = ({ label, priority, status, title }: Task) => {
    const newTask = {
      title: title.toString(),
      priority: priority.toString(),
      status: status.toString(),
      label: label.toString()
    }
    console.log(newTask)
    createTask(newTask)
    console.log('tarea enviada')
    redirect('/todo-list/all-tasks')
  }

  return (
    <div className='w-full min-h-screen p-4 '>
      <Card className='w-96 m-auto'>
        <CardHeader>
          <CardTitle>Tareas para hoy</CardTitle>
          <CardDescription>Agrega tus pendientes</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-8 max-w-2xl min-w-72 m-auto'
            >
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título de la tarea</FormLabel>
                    <FormControl>
                      <Input placeholder='Título' {...field} />
                    </FormControl>
                    <FormDescription>Agrega tu tarea una tarea</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='label'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Acción</FormLabel>
                    <FormControl>
                      <Input placeholder='Acción' {...field} />
                    </FormControl>
                    <FormDescription>
                      Asigna una acción a tu tarea
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='priority'
                render={({ field: { onChange, value, onBlur } }) => (
                  <FormItem>
                    <FormLabel>Prioridad</FormLabel>
                    <FormControl>
                      <SelectOptions
                        elements={priorities}
                        value={value}
                        onChange={onChange}
                        name='Prioridad'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='status'
                render={({ field: { value, onChange, onBlur } }) => (
                  <FormItem>
                    <FormLabel>Estado de la tarea</FormLabel>
                    <FormControl>
                      <SelectOptions
                        elements={statuses}
                        value={value}
                        onChange={onChange}
                        name='Estado'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button size='default' type='submit' className='cursor-pointer'>
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
