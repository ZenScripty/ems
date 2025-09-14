import React, { useState } from "react";

const CreateTask = () => {
  const [asign, setAsign] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      asign,
      taskDate,
      category,
      taskDesc,
      active: false,   // not active until employee accepts
      newTask: true,   // mark as new
      failed: false,
      completed: false,
    };

    // 🔹 Get employees from localStorage
    const data = JSON.parse(localStorage.getItem("employees")) || [];

    const updatedData = data.map((emp) => {
      if (emp.firstName.toLowerCase() === asign.toLowerCase()) {
        // ensure emp.tasks exists
        emp.tasks = emp.tasks || [];
        emp.tasks.push(task);

        // ensure taskCounts exists
        emp.taskCounts = emp.taskCounts || {
          newTask: 0,
          active: 0,
          completed: 0,
          failed: 0,
        };

        // 🔹 increase newTask count
        emp.taskCounts.newTask = (emp.taskCounts.newTask || 0) + 1;
      }
      return emp;
    });

    // 🔹 Save back to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedData));

    // reset form
    setTaskTitle("");
    setAsign("");
    setTaskDate("");
    setCategory("");
    setTaskDesc("");

    // 🔹 Trigger re-render for context/listeners
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 bg-[#35435f] rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Create New Task</h2>
        <form
          onSubmit={submitHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                Task Title
              </label>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="UI Design"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Date</label>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Assign to
              </label>
              <input
                value={asign}
                onChange={(e) => setAsign(e.target.value)}
                type="text"
                placeholder="Employee name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Category
              </label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Category"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="block text-white font-semibold mb-2">
              Description
            </label>
            <textarea
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
              className="flex-1 min-h-[150px] px-4 py-2 border border-gray-300 rounded focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Task description"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2 rounded shadow hover:bg-blue-700 transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
