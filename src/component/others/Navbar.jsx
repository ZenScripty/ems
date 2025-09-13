import React from 'react'

const Navbar = ({ employee, onLogout }) => {
    
return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-2xl font-medium'> Hello, <br />  <span className='text-3xl font-semibold'>  {employee?.firstName || "Admin"} 👋🏻</span></h1>
        <button onClick={onLogout} className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
            Logout
        </button>
    </div>
)
}

export default Navbar
