import React from 'react'
import { Link } from 'react-router-dom'

const Update = () => {
  return (
    <div className='my-5'>
    <h1 className='text-center mb-5'>Update Form</h1>
    <div className="d-flex justify-content-center flex-column align-items-center">
    <input className='border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="text" placeholder='First Name'/>
    <input className='border-0 bg-dark text-white fw-bold fs-1 my-5 rounded-pill py-2 px-5' type="text" placeholder='Last Name'/>
    <input className='border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="email" placeholder='Email Address'/>
    <input className='border-0 bg-dark text-white fw-bold fs-1 my-5 rounded-pill py-2 px-5' type="number" placeholder='Mobile'/>
    <input className='border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="password" placeholder='Password'/>
   <Link to='/acc' className='my-5 bg-dark text-white fw-bold rounded-pill py-2 px-5 text-decoration-none'>Update</Link>
   <Link to='/acc' className='bg-danger text-warning fw-bold rounded-pill py-2 px-5 text-decoration-none'>Cancel</Link>
    </div>
</div>
  )
}

export default Update