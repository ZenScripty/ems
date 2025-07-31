import React from 'react'

const CreateTask = () => {
  return (
    <div>
       <div className="max-w-4xl mx-auto mt-10 bg-[#35435f] rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 ">Create New Task</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <div className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Task Title</label>
                        <input
                        
                            type="text"
                            placeholder="UI Design"
                            className=" w-full px-4 py-2 border border-gray-300 rounded focus:outline-none bg-transparent   focus:ring-2 focus:ring-blue-400 "
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Date</label>
                        <input
                            type="date"
                            className=" w-full px-4 py-2 border border-gray-300 rounded focus:outline-none bg-transparent   focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Assign to</label>
                        <input
                            type="text"
                            placeholder="Employee name"
                            className=" w-full px-4 py-2 border border-gray-300 rounded focus:outline-none bg-transparent   focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Category</label>
                        <input
                            type="text"
                            placeholder="Category"
                            className=" w-full px-4 py-2 border border-gray-300 rounded focus:outline-none bg-transparent   focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea
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
  )
}

export default CreateTask
