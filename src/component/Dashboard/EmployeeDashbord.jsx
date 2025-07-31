import React from 'react'
import Navbar from '../others/Navbar'
import TaskLists from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashbord = () => {
  return ( 
    <div className='p-10 h-screen '>
      <Navbar/>
<TaskLists/>
<TaskList/>
    </div>
  )
}

export default EmployeeDashbord
