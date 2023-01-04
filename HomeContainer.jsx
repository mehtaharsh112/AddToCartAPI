import Home from '../components/Home'
import { connect } from 'react-redux'
import {addToCart,removeToCart} from '../Services/Actions/actions'

const MapStateToProps=state=>({
    cardData:state.cardItems
})

const MapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(MapStateToProps,MapDispatchToProps)(Home)