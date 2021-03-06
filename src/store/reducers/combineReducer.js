import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productReducer from "./product";
import productDiscountReducer from "./productDiscount";


export default combineReducers({
  coun : counterReducer,
  products:productReducer,
  productDiscount:productDiscountReducer,
});
