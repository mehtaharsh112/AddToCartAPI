import {ADD_TO_CART, REMOVE_TO_CART} from '../Constant'

const addToCart = (data)=>{
    // console.log("Action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}

const removeToCart = ()=>{
    // console.log("Action",data)
    return {
        type:REMOVE_TO_CART
    }
}

export {ADD_TO_CART, REMOVE_TO_CART, addToCart,removeToCart}