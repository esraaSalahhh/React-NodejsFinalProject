import * as TYPES from "../types/product";
import axios from 'axios';
export const getProducts = () => (dispatch) => {
    axios.get('https://jumia-mearn.herokuapp.com/api/productsrate')
    .then(function (response) {
        console.log(response);
        dispatch({
            type : TYPES.GET_PRODUCTS,
            payload : response.data
        })
    })
        .catch(function (error) {
            console.log(error);
        });
};

