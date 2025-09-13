import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashbord";
import AdminDashboard from "./component/Dashboard/AdmintDashbord";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  //  Restore user from localStorage on refresh
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser);
      setUser(parsed);
    }
  }, [authData]);


  const handleLogin = (email, password) => {
    //  Admin login
    if (
      authData.admin &&
      authData.admin.length > 0 &&
      authData.admin[0].email === email &&
      authData.admin[0].password === password
    ) {
      const adminData = { role: "admin", email };
      setUser(adminData);
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    }
    //  Employee login
    else if (authData.employees && authData.employees.length > 0) {
      const matchedEmployee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (matchedEmployee) {
        const employeeData = { role: "employee", ...matchedEmployee };
        setUser(employeeData);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      } else {
        alert("Invalid Employee Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <EmployeeDashboard employee={user} onLogout={handleLogout} />
      )}
    </>
  );
};

export default App;

