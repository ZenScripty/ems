import React from 'react'

const AcceptTask = ({task}) => {
  console.log();
  
  return (
      <div className="flex-shrink-0 h-full border bg-sky-300 w-[300px]  px-4 py-3 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm"> {task.category}</h3>
          <h4>{task.taskDate}</h4>
        </div>
        <h2 className="mt-5  text-2xl font-semibold ">{task.taskTitle}</h2>
        <p className="mt-2 text-base leading-none">
          {task.taskDescription}

        </p>
        <div className='flex justify-between mt-4 '>
            <button className='bg-green-500 py-1 px-2 text-sm rounded-lg'>Mak as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm rounded-lg'>Mak as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
