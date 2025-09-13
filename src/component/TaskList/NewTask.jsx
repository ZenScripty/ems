import React from 'react'

const NewTask = ({task}) => {
  return (
 <div className="flex-shrink-0 h-full border bg-gray-500 w-[300px]  px-4 py-3 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm"> {task.category}</h3>
          <h4>{task.taskDate}</h4>
        </div>
        <h2 className="mt-5  text-2xl font-semibold ">{task.taskTitle}</h2>
        <p className="mt-2 text-base leading-none">
          {task.taskDescription}
        </p>
        <div className='mt-4'>
                      <button className='bg-green-500 py-1 px-2 text-sm rounded-lg w-full'>Accept Task</button>

        </div>
      </div>
  )
}

export default NewTask
