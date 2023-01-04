import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div>
         <h1 className='text-center my-5'>Login Form</h1>
         <div className="d-flex justify-content-center flex-column align-items-center">
          <input className='border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="email" placeholder='Email Address'/>
          <input className='my-5 border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="password" placeholder='Password'/>
         <Link to='/ACC' className='bg-dark text-white fw-bold rounded-pill py-2 px-5 text-decoration-none'>Log In</Link>
         <Link to='/' className='my-5 bg-dark text-white fw-bold rounded-pill py-2 px-5 text-decoration-none'>Create Account</Link>
         </div>
    </div>
  )
}

export default UserLogin