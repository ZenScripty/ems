
import React, { useState } from "react";
useState
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 const submitHandler = (e)=>{
  e.preventDefault()
console.log(' hello gys form submited');
console.log( " email is" , email);
console.log( " Password is" , password);
setEmail('')
setPassword('')


 }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>
        <form 
        onSubmit={ (e) => {
          submitHandler(e)
        }}
        className="flex flex-col gap-6 text-gray-800">
          <input  value={email}
          onChange={(e)=>{
           setEmail(e.target.value)
            
          }}
          required
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-[1.5px] focus:ring-blue-400 transition"
          />
          <div className="relative">
            <input 
            
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none text-gray-800 focus:ring-[1.5px] focus:ring-blue-400 transition w-full"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm focus:outline-none"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500 text-sm">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
