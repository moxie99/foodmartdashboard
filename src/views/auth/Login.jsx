import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }
  return (
    <div className='min-w-screen min-h-screen bg-primary flex justify-center items-center'>
      <div className="w-[380px] text-white p-2">
        <div className="bg-secondary p-4 rounded-md">
            <h2 className="text-xl mb-3">Welcome to FoodMart</h2>
            <p className="text-sm mb-3">Please Enter Email and Password to Log in </p>
            <form>
               
                 <div className="flex flex-col w-full gap-2 mb-3">
                <label htmlFor="name">Email</label>
                <input onChange={handleInput} value={state.email}  className="px-3 py-2 outline-none border border-slate-500 rounded-md bg-transparent text-white focus:border-primary overflow-hidden" type="text" name="email" placeholder="Enter Business email" id="email" required />
                </div>
                 <div className="flex flex-col w-full gap-2 mb-3">
                <label htmlFor="name">Password</label>
                <input onChange={handleInput} value={state.password} className="px-3 py-2 outline-none border border-slate-500 rounded-md bg-transparent text-white focus:border-primary overflow-hidden" type="password" name="password" placeholder="Enter Password" id="password" required />
                </div>
                
                <button className="bg-primary w-full px-7 py-2 mb-3 hover:shadow-lg hover:shadow-blue-500/50 text-white rounded-md ">
                    LOG IN
                </button>

                <div className="flex items-center mb-3 gap-3 justify-center">
                    <p>Don't have an account ? <Link to="/register" >Register Here</Link></p>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
