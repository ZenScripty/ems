import React from "react";
import Navbar from "../others/Navbar";
import CreateTask from "../../component/others/CreateTask"
import AllTask from "../others/AllTask";

const AdmintDashbord = () => {
return (
    <div className="min-h-screen   p-8">
        <Navbar />
       <CreateTask/>
       <AllTask/>
    </div>
);
};

export default AdmintDashbord;
