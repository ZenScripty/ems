import React from 'react'

const TaskLists = () => {
  return (
    <div className='flex   justify-between gap-5 mt-10'>
        <div className='px-6 py-9 w-[45%] bg-red-400 rounded-lg'>
            <h2 className='text-2xl font-medium'>0</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>
        </div>
        <div className='px-6 py-9 w-[45%] bg-yellow-300 rounded-lg'>
            <h2 className='text-2xl font-medium'>0</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>
        </div>
        <div className='px-6 py-9 w-[45%] bg-green-400 rounded-lg'>
            <h2 className='text-2xl font-medium'>0</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>
        </div>
        <div className='px-6 py-9 w-[45%] bg-blue-400 rounded-lg'>
            <h2 className='text-2xl font-medium'>0</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>
        </div>
      
    </div>
  )
}

export default TaskLists
