import React from "react";
import Navbar from "../others/Navbar";
import TaskLists from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashbord = ({ employee , onLogout }) => {


  return (
    <div className="p-10 h-screen ">
      <h1>Welcome, {employee?.name}</h1>
      <p>Email: {employee?.email}</p>
     <Navbar employee={employee} onLogout={onLogout} />
      <TaskLists employee={employee} />
      <TaskList employee={employee} />
    </div>
  );
};

export default EmployeeDashbord;
