import React from 'react'
import HomeContainer from './container/HomeContainer'
import HeaderContainer from './container/HeaderContainer'
// import Home from './components/Home'
const App = () => {
  return (
    <div>
      <HeaderContainer/>
      <HomeContainer/>
      {/* <Home/> */}
    </div>
  )
}

export default App

// import React,{useContext} from 'react';
// import {ApiCont} from './Api'
// function App() {
//   let {hits,isLoading, rem, query,searchPost} = useContext(ApiCont)
//   if(isLoading)
//   {
//     return(
//       <>
//       <h2 style={{fontSize:'100px',margin:0 ,color:'yellow', backgroundColor:'red'}}>LOADING</h2>
//       </>
//     )
//   }
//   return (
//     <>
//    <form action="" className='d-flex justify-content-center mt-5' onSubmit={e=>e.preventDefault()}>
//    <input type="text" value={query || ""} className='w-25 form-control' placeholder='search' onChange={e=>searchPost(e.target.value)} />
//    </form>
//    <div className="d-flex flex-column justify-content-center pt-5">
//    {hits.map((curPost)=>{
//       const {title,author,objectID,url, num_comments} = curPost
//       return (
//         <div key={objectID}>
//           <div className="bg-info border border-1 border-dark py-2 mb-5 text-center">
//             <h2 className='fs-1'>{title}</h2>
//             <div className='d-flex justify-content-around my-3'>
//             <p className="display-6 mb-0">By {author}</p>
//             <p className="display-6 mb-0">|</p>
//             <p className="display-6 mb-0">{num_comments} comments</p>
//             </div>
//             <div className="card-button d-flex justify-content-evenly">
//               <a href={url} target="_blank" className='text-decoration-none bg-dark text-white fw-bold py-2 px-5'>Read More</a>
//               <button className='bg-danger text-warning fw-bold border-0 py-2 px-5' onClick={()=>rem(objectID)}>Delete</button>
//             </div>
//           </div>
//         </div>
//       )
//     })}
//    </div>
//     </>
//   );
// }

// export default App;
