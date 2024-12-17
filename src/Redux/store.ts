import {createStore,combineReducers} from "redux"
import productReducer from "./Reducers/productReducer"






const rootReducer = combineReducers({
    products:productReducer, // key 'products' is tied to productReducer
})
const store = createStore(rootReducer)

export default store