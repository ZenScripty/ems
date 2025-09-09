import React, { useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashbord'
import AdminDashboard from './component/Dashboard/AdmintDashbord'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

const [user, setUser] = useState(null)

const handleLogin = (email, password) =>{
if (email === 'admin@example.com' && password === '123') {
    // setUser({ type: 'admin', email });
    setUser('admin')
    console.log(user);
  } else if (email === 'user1@gmail.com' && password === '123') {
    // setUser({ type: 'user', email });
    setUser('employee')
    console.log(user);

    // console.log('This is User');
  } else {
    alert("Invalid Credentials");
  }
}

return (
   <>

{!user ? <Login handleLogin={handleLogin} /> : ""}
{user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}


   </>
  )
}

export default App
