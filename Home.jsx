import React from 'react'

const Home = (props) => {
  console.log("PROPS DATA",props)
  return (
    <div>
      {/* <span className='fw-bold' style={{color:'white',backgroundColor:'red', borderRadius:'50%', padding:"10px 20px", position:'absolute', right:30, top:10 }}>{props.cardData.length}</span>
     <div className='m-5' style={{textAlign:'right'}}>
     <img width={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRfpaJA3A7Z_Frsv7cEhQaUyxRTpQ8TeKhBQ&usqp=CAU" alt="" />
     </div> */}
      <div className="d-flex justify-content-evenly align-items-center border border-2 py-5">
          <img src="https://img2.gadgetsnow.com/gd/images/products/additional/small/G390858_View_1/mobiles/smartphones/apple-iphone-14-pro-max-256-gb-deep-purple-6-gb-ram-.jpg" alt="" />
          <h1>IPHONE Price:1000 $</h1>
          <button
          onClick={()=>props.addToCartHandler({price:1000,name:'I-Phone'})}
           className="border-0 bg-danger text-warning py-2 px-5 rounded-pill fw-bold">
            Add To Cart
          </button>
          <button
          onClick={()=>props.removeToCartHandler()}
           className="border-0 bg-warning text-danger py-2 px-5 rounded-pill fw-bold">
            Remove To Cart
          </button>
      </div>
    </div>
  )
}

export default Home