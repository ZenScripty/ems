import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  // console.log(authData.employees);

  return (
    <div
      id="allListConatiner"
      className="bg-[#35435f] p-5 rounded-lg mt-5   "
    >
      <div className="bg-red-400 mb-2 py-2 px-4 rounded-lg flex justify-between">
        <h2 className="w-1/5 text-center">Name</h2>
        <h3 className="w-1/5 text-center">New Task</h3>
        <h5 className="w-1/5 text-center">Active Task</h5>
        <h5 className="w-1/5 text-center">Completed Task</h5>
        <h5 className="w-1/5 text-center">Failed Task</h5>
      </div>
      <div className="scrollHide  ">
        {authData.employees.map(function (elem , idx) {
          return (
            <div key={idx} className="bg-[#50a4b9] mb-2 py-2 px-4 rounded-lg flex justify-between">
              <h2 className="w-1/5 text-center ">{elem.firstName}</h2>
              <h3 className="w-1/5 text-center text-blue-600">{elem.taskCounts.newTask}</h3>
              <h5 className="w-1/5 text-center text-yellow-400">{elem.taskCounts.active}</h5>
              <h5 className="w-1/5 text-center text-green-400">{elem.taskCounts.completed}</h5>
              <h5 className="w-1/5 text-center text-red-500">{elem.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
