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
import React, { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  name: z.string().min(1, {message: "¡Dale un nombre a tu tarea!"})
})

type TaskTypes = z.infer<typeof formSchema>

const Formulary = () => {
  const [formState, setFormState] = useState<TaskTypes | null>(null)
  const form = useForm<TaskTypes>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  })
  const onSubmit = (values: TaskTypes) => {
    setFormState(values)
  }
  return (
    <div className='container min-h-screen p-4'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 max-w-2xl min-w-72 m-auto'
        >
          <FormField
            control={form.control}
            name='task'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la tarea</FormLabel>
                <FormControl>
                  <Input placeholder='name' {...field} />
                </FormControl>
                <FormDescription>Agrega tu tarea una tarea</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='task'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ingresa tu tarea</FormLabel>
                <FormControl>
                  <Textarea placeholder='' {...field} />
                </FormControl>
                <FormDescription>Agrega tu tarea una tarea</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='task'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ingresa tu tarea</FormLabel>
                <FormControl>
                  <Input placeholder='tarea' {...field} />
                </FormControl>
                <FormDescription>Agrega tu tarea una tarea</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size='default' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
  )
}
export default Formulary
