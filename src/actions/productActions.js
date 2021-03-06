import axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";



export const listProducts = () => (dispatch) => {
    dispatch({
        type:PRODUCT_LIST_REQUEST
    })
    axios.get(`https://jumia-mearn.herokuapp.com/api/products`)
    .then((response) => { 
         // success 
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload :response.data
        })
       console.log(response.data)

        
        
    })  
    .catch(function (error) {
      console.log(error);
      dispatch({
        type:PRODUCT_LIST_FAIL,
        payload :error.message
    })
    });
}
export const detailsProduct = (productId) => (dispatch) => {
    dispatch({
        type:PRODUCT_DETAILS_REQUEST,
        payload:productId
    })
    axios.get(`https://jumia-mearn.herokuapp.com/api/products/${productId}`)
    //${productId}
    .then((response) => { 
         // success 
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload :response.data
        })
       console.log(response.data)

        
        
    })  
    .catch(function (error) {
      console.log(error);
      dispatch({
        type:PRODUCT_DETAILS_FAIL,
        //payload :error.message,
        payload :error.response && error.response.data.message?
        error.response.data.message: error.message

    })
    });
}