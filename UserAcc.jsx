import React from 'react'
import { Link } from 'react-router-dom'

const UserAcc = () => {
  return (

        <div>
        <h1 className='mb-0'>Welcome User</h1>
        <div className="d-flex flex-column align-items-center">
        <Link to='/upd' className='my-5 bg-dark text-white fw-bold rounded-pill py-2 px-5 text-decoration-none'>Update Account</Link>
        <Link to='/login' className='bg-dark text-white fw-bold rounded-pill py-2 px-5 text-decoration-none'>Log Out</Link>
        </div>
        </div>
  )
}

export default UserAcc