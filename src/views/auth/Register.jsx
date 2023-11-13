import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [state, setState] = useState({
        name: '',
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
            <p className="text-sm mb-3">Please fill the form below to start your business</p>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col w-full gap-2 mb-3">
                <label htmlFor="name">Business Name</label>
                <input onChange={handleInput} value={state.name} className="px-3 py-2 outline-none border border-slate-500 rounded-md bg-transparent text-white focus:border-primary overflow-hidden" type="text" name="name" placeholder="Enter Business name" id="name" required />
                </div>
                 <div className="flex flex-col w-full gap-2 mb-3">
                <label htmlFor="name">Email</label>
                <input onChange={handleInput} value={state.email} className="px-3 py-2 outline-none border border-slate-500 rounded-md bg-transparent text-white focus:border-primary overflow-hidden" type="text" name="email" placeholder="Enter Bunsiess email" id="email" required />
                </div>
                 <div className="flex flex-col w-full gap-2 mb-3">
                <label htmlFor="name">Password</label>
                <input onChange={handleInput} value={state.password} className="px-3 py-2 outline-none border border-slate-500 rounded-md bg-transparent text-white focus:border-primary overflow-hidden" type="password" name="password" placeholder="Enter Password" id="password" required />
                </div>
                 <div className="flex w-full gap-3 mb-3 items-center">
                
                <input className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500" type="checkbox"  id="checkbox" required />
                <label htmlFor="name">I agree to terms and policy</label>
                </div>
                <button className="bg-primary w-full px-7 py-2 mb-3 hover:shadow-lg hover:shadow-blue-500/50 text-white rounded-md ">
                    Register
                </button>

                <div className="flex items-center mb-3 gap-3 justify-center">
                    <p>Already have an account ? <Link to="/login" >Sign In</Link></p>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
