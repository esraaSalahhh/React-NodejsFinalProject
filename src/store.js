
import { createStore , applyMiddleware, combineReducers , compose} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { userLoginReducer, userRegiterReducer } from "./reducers/userReducers";

const initialState = {
    userLogin:{
        userInfo:localStorage.getItem('userInfo')?
        JSON.parse(localStorage.getItem('userInfo'))
        :null,

    },
    cart:{
        cartItems: localStorage.getItem('cartItems')?
         JSON.parse(localStorage.getItem('cartItems'))
         :[],
    }
};
const reducer = combineReducers({
    productList : productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegiterReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*const devTools =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();*/
const store= createStore (reducer ,initialState ,composeEnhancer(applyMiddleware(thunk)));
export default store;