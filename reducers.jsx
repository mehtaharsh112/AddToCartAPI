import { ADD_TO_CART, REMOVE_TO_CART} from "../Constant"

const initialState = {
    cardData : []
}

function cardItems(state=[],action){
    
    switch(action.type)
    {
        case ADD_TO_CART :
            // console.log("Reducer",action)
          return [
                ...state,
                {cardData:action.data}
          ]
          case REMOVE_TO_CART :
            // console.log("Reducer",action)
            state.pop()
          return [
                ...state,
          ]
            break
            default:
                return state
    }
}

export default cardItems