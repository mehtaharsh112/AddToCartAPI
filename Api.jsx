import React,{createContext, useReducer, useEffect} from 'react'
let url = 'https://hn.algolia.com/api/v1/search?'
let ApiCont = createContext()
const Api = ({children}) => {
    let i = {
        hits:[],
        isLoading:true,
        query:''
    }
    let reducer = (state,action)=> {
        switch(action.type)
        {
            case 'apiFetch' :
            return {
                ...state,
                hits:action.payLoad.hits,
                isLoading:false
            }
            case 'loader' :
                return {
                    isLoading:true
                }
                case 'remElem' :
                    return {
                        ...state,
                        hits:state.hits.filter(e=>e.objectID != action.payLoad)}
                        case 'searchQuery' :
                            return{
                                ...state,
                            query:action.payLoad
                            }
        }
    }
    let fet = async (e)=> {
        dispatch({type:'loader'})
       try {
        let d = await fetch(e)
        let data = await d.json()
        dispatch({type:'apiFetch',
    payLoad:{
        hits:data.hits
    }})
       } catch (error) {
        console.log(error)
       }
    }
    const searchPost = (searchQuery)=> {
        dispatch({type:'searchQuery', payLoad:searchQuery})
    }
    const rem = (ID)=>{
        dispatch({type:'remElem',
        payLoad: ID}
    )}

    useEffect(()=>{
       fet(`${url}query=${i.query}`) 
},[])
   
    let [state,dispatch] = useReducer(reducer,i)
  return (
    <ApiCont.Provider value={{...state,rem, searchPost}}>
        {children}
    </ApiCont.Provider>
  )
}

export default Api
export {ApiCont}