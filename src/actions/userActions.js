import axios from "axios";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";

export const signin = (email , password) => (dispatch) => {
    dispatch({
        type:USER_SIGNIN_REQUEST,
        payload:{email , password}
    })
    axios.post('https://jumia-mearn.herokuapp.com/user/login',{
       /* "email":"rema@gmail.com",
         "password":"012qwert"*/
        "email":email,
        "password":password
    })
    .then((response) => { 
         // success 
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload :response.data
        });

        localStorage.setItem('userInfo', JSON.stringify(response.data));
       console.log(console.log(localStorage.getItem('userInfo')));
    })  
    .catch(function (error) {
      console.log(error);
      dispatch({
        type:USER_SIGNIN_FAIL,
        payload :error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
    });
};
export const register = (firstName,lastName,email, password,phone) => (dispatch) => {
    dispatch({
        type:USER_REGISTER_REQUEST,
        payload:{firstName,lastName,email, password,phone}
    })
    axios.post('https://jumia-mearn.herokuapp.com/api/user/register',{
        "firstName":firstName,
        "lastName":lastName,
        "email":email,
        "password":password,
        "phone":phone,

    })
    .then((response) => { 
         // success 
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload :response.data
        });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload :response.data
        });
        localStorage.setItem('userInfo', JSON.stringify(response.data));
       console.log(console.log(localStorage.getItem('userInfo')));
    })  
    .catch(function (error) {
      console.log(error);
      dispatch({
        type:USER_REGISTER_FAIL,
        payload :error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
    });
};
export const singnout =() => (dispatch) =>{
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
   localStorage.removeItem('shippingAddress');
    dispatch({type:USER_SIGNOUT})
}
