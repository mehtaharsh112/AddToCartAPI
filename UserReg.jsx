import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const UserReg = () => {
  // let [id,setId] = useState('')
  // let [title,setTitle] = useState('')
  // let [firstName,setFirstName] = useState('')
  // let [lastName,setLastName] = useState('')
  let [email,setEmail] = useState('')
  // let [phoneNo,setPhoneNo] = useState('')
  let [password,setPassword] = useState('')
  // let [name,setName] = useState('')
  // let [job,setJob] = useState('')
  // let register = ()=>{
  //   let data = {firstName,lastName,email,phoneNo,password}
  //   fetch('https://mychangeuk.nicheapps.in/api/User/Registration',{
  //     method:'POST',
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify(data)
  //   }).then((result)=>{
  //     console.log(result,"result")
  //     result.json().then((resp)=>{
  //       console.log(resp,'resp')
  //     })
  //   })
  // }


//   function register()
// {
//   let data = {name,job}
//   // let data = {id,title}
//   fetch("https://reqres.in/api/users", {
//     method:'POST',
//     headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify(data)
//   }).then((result)=>{
//     // console.log("result",result)
//     result.json().then((resp)=>{
//         console.log("resp",resp)
//     })
//   })
// }


// const register = ()=>{
//   let data = {name,job}
//   fetch('https://reqres.in/api/users',{
//     method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(data)
//   }).then(response => response.json())
//   .then((result)=>console.log(result,"result"));
// }

// const requestOptions = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ title: 'React POST Request Example' })
// };
// fetch('https://reqres.in/api/posts', requestOptions)
//   .then(response => response.json())
//   .then(data => this.setState({ postId: data.id }));
// }

// let register = ()=> {
//   let data = {name,job}
//   fetch('https://reqres.in/api/users',{
//     method:'POST',
//     headers:{
//       'accept':'application/json',
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify(data)
//   }).then((result)=>{
//     console.log(result,"result")
//     result.json().then((resp)=>{
//       console.log(resp,"resp")
//     })
//   })
// }


let register = ()=> {
  let data = {email,password}
  fetch('https://reqres.in/api/users',{
    method:'POST',
    headers:{
      'accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }).then((result)=>{
    console.log(result,"result")
    result.json().then((resp)=>{
      console.log(resp,"resp")
    })
  })
}
  return (
    <div>
          {/* <h1 className='text-center my-5'>Registration Form</h1>
          <div className="d-flex justify-content-center flex-column align-items-center">
          <input value={firstName} onChange={e=>setFirstName(e.target.value)} className='border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="text" placeholder='First Name'/>
          <input value={lastName} onChange={e=>setLastName(e.target.value)} className='border-0 bg-dark text-white fw-bold fs-1 my-5 rounded-pill py-2 px-5' type="text" placeholder='Last Name'/>
          <input value={email} onChange={e=>setEmail(e.target.value)} className='border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="email" placeholder='Email Address'/>
          <input value={phoneNo} onChange={e=>setPhoneNo(e.target.value)} className='border-0 bg-dark text-white fw-bold fs-1 my-5 rounded-pill py-2 px-5' type="number" placeholder='Mobile'/>
          <input value={password} onChange={e=>setPassword(e.target.value)} className='border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="password" placeholder='Password'/> */}
         {/* <Link onClick={register} to='/login' className='my-5 bg-dark text-white fw-bold rounded-pill py-2 px-5 text-decoration-none'>Register</Link> */}
          {/* </div> */}
          {/* <input type="text" onChange={e=>setId(e.target.value)}/><br />
          <input type="text" onChange={e=>setTitle(e.target.value)}/>
          <input type="submit" onClick={register} /> */}

<input value={email} onChange={e=>setEmail(e.target.value)} className='border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="email" placeholder='Email Address'/>
 <input value={password} onChange={e=>setPassword(e.target.value)} className='border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="password" placeholder='Password'/>
          {/* <input value={name} onChange={e=>setName(e.target.value)} className='border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="text" placeholder='First Name'/><br/>
          <input value={job} onChange={e=>setJob(e.target.value)} className='my-5 border-0 bg-dark text-white fw-bold fs-1 rounded-pill py-2 px-5' type="text" placeholder='Job'/><br/>*/}
          <Link onClick={register} to='/login' className='my-5 bg-dark text-white fw-bold rounded-pill py-2 px-5 text-decoration-none'>Register</Link> 
    </div>
    )
        }

export default UserReg

// "firstName": "tedfgstNB",
//     "lastName": "nodfgw",
//     "email": "nirali@nichetech.in",
//     "phoneNo": null,
//     "password": "12345678"




















// function login()
// {
//   let data = {email,password}
//   fetch("https://mychangeuk.nicheapps.in/api/User/Login", {
//     method:'POST',
//     headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify(data)
//   }).then((result)=>{
//     // console.log("result",result)
//     result.json().then((resp)=>{
//         console.log("resp",resp)
//     })
//   })
// }