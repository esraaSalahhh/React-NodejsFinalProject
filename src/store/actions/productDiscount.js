import * as TYPES from "../types/product";
import axios from 'axios';
export const getProductsDiscount = () => (dispatch) => {
    axios.get('https://jumia-mearn.herokuapp.com/api/productsdiscount')
    .then(function (response) {
        console.log(response);
        dispatch({
            type : TYPES.GET_PRODUCTS_SORT_DISCOUNT,
            payload : response.data
        })
    })
        .catch(function (error) {
            console.log(error);
        });
};

