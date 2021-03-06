// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import reducer from "./reducers/combineReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// export default store;



import { createStore , applyMiddleware, combineReducers , compose} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { cartReducer } from "../reducers/cartReducers";
import { productDetailsReducer, productListReducer } from "../reducers/productReducers";
import { userLoginReducer, userRegiterReducer } from "../reducers/userReducers";
import counterReducer from "./reducers/counterReducer";
import productReducer from "./reducers/product";
import productDiscountReducer from "./reducers/productDiscount";
import { orderCreateReducer, orderDetailsReducer, orderMineListReducer, orderPaymentReducer } from "../reducers/orderReducers";


const initialState = {
    userLogin:{
        userInfo:localStorage.getItem('userInfo')?
        JSON.parse(localStorage.getItem('userInfo'))
        :null,

    },
    cart:{
        cartItems: localStorage.getItem('cartItems')?
         JSON.parse(localStorage.getItem('cartItems'))
         :[], shippingAddress: localStorage.getItem('shippingAddress')?
         JSON.parse(localStorage.getItem('shippingAddress'))
         :{},
         paymentMethod: 'paypal',
    }
};
const reducer = combineReducers({
    productList : productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegiterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPaymentReducer,
    orderMineList:orderMineListReducer,
    coun : counterReducer,
    products:productReducer,
    productDiscount:productDiscountReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*const devTools =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();*/
const store= createStore (reducer ,initialState ,composeEnhancer(applyMiddleware(thunk)));
export default store;