import Header from '../components/Header'
import { connect } from 'react-redux'

const MapStateToProps=state=>({
    cardData:state.cardItems
})

const MapDispatchToProps=dispatch=>({
})

export default connect(MapStateToProps,MapDispatchToProps)(Header)