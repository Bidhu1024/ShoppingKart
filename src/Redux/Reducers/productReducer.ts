const initialState = {
    products:[],
    loading:false,
    error:false
}

const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case "SET_PRODUCTS":
            return {...state,loading:false,products:action.payload}
            case 'SET_LOADING':
            return { ...state, loading: action.payload };
            case "ADD_PRODUCTS":
                return {...state,
                    products:[...state.products,action.payload]
                }
            default:return state
    }
}

export default productReducer;