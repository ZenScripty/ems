import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import Completed from "./completeTask";
import FailedTask from "./FailedTast";

const TaskList = ({ employee }) => {
  return (
    <div
      id="taskList"
      className="mt-10 h-[55%] w-full rounded-xl p-5 flex gap-5 overflow-x-auto"
    >
      {employee?.tasks?.map((elem, index) => (
        <React.Fragment key={index}>
          {elem.active && <AcceptTask task={elem} />}
          {elem.newTask && <NewTask task={elem} />}
          {elem.completed && <Completed task={elem} />}
          {elem.failed && <FailedTask task={elem} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskList;
