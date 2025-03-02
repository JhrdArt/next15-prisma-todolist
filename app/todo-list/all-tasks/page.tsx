import { columns } from '@/components/todoComponents/column'
import { DataTable } from '@/components/todoComponents/data-table'
import { UserNav } from '@/components/todoComponents/user-nav'
import { Metadata } from 'next'
import { getTasks } from '@/actions/task-actions'

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'A task and issue tracker build using Tanstack Table.'
}

// Simulate a database read for tasks.
// async function getTasks () {
//   const filePath = path.join(process.cwd(), 'data', 'tasks.json')
//   const data = await fs.readFile(filePath)
//   const tasks = JSON.parse(data.toString())
//   return z.array(taskSchema).parse(tasks)
// }

const AllTasks = async () => {
  const data = await getTasks()

  return (
    <>
      <div className=' h-full flex-1 flex-col space-y-8 p-8 flex'>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
            <p className='text-muted-foreground'>
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <UserNav />
          </div>
        </div>
        <DataTable data={data} columns={columns} />
      </div>
    </>
  )
}
export default AllTasks
