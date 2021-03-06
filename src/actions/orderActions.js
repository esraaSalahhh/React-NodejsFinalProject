import axios from "axios";
import { CART_EMPTY } from "../constants/cartConstants";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL,
     ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS ,
     ORDER_MINE_LIST_FAIL,
     ORDER_MINE_LIST_REQUEST,
     ORDER_MINE_LIST_SUCCESS,
     ORDER_PAY_FAIL, ORDER_PAY_REQUEST , ORDER_PAY_SUCCESS
    
    } from "../constants/orderConstants";


export const createOrder = (order) => (dispatch, getState) => {
    dispatch({
        type:ORDER_CREATE_REQUEST ,
        payload: order
    });
   const {userLogin :{userInfo}}= getState();
   console.log(userInfo);
   console.log(userInfo.token);
   var bdy = {
    shippingAddress: {
        firstName: "hagarrrr22222 ",
        address: "mohamed faridrrr22222",
        city: "mansourarrr",
        postalCode: "H2x1c5",
        country: "Egypt"
    },
    isPaid: false,
    isDelivered: false,
    _id: "60390c49f7c0c505a0994424",
    orderItems: [],
    paymentMethod: "paypal",
    itemsPrice: 2143,
    shippingPrice: 0,
    taxPrice: 321.45,
    totalPrice: 2464.45,
    createdAt: "2021-02-26T14:57:13.142Z",
    updatedAt: "2021-02-26T14:57:13.142Z",
    __v: 0
}
    axios.post('https://jumia-mearn.herokuapp.com/api/orders' , order,  {
        headers: {
            Authorization :`Bearer ${userInfo.token}`,
        }
    })
    .then((response) => { 
         // success 
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload :response.data.order
        });
       console.log(response.data.order)
      dispatch({ type: CART_EMPTY });
       localStorage.removeItem('cartItems');
    })  
    .catch(function (error) {
      console.log(error);
      dispatch({
        type:ORDER_CREATE_FAIL,
        payload :error.response && error.response.data.message?
        error.response.data.message: error.message
    })
    });



};
export const detailsOrder = (orderId) => (dispatch, getState) =>{
    dispatch({
        type:ORDER_DETAILS_REQUEST ,
        payload: orderId
    });
    const {userLogin :{userInfo}}= getState();
    console.log(orderId);
    axios.get(`https://jumia-mearn.herokuapp.com/api/orders/${orderId} ` , {
        headers: {
            Authorization :`Bearer ${userInfo.token}`,
        }

    } )
    .then((response) => { 
        // success 
        console.log(response.data)
       dispatch({
           type:ORDER_DETAILS_SUCCESS,
           payload :response.data
       });
     
   })  
   .catch(function (error) {
     console.log(error);
     const message = error.response && error.response.data.message?
     error.response.data.message: error.message
     dispatch({
       type:ORDER_DETAILS_FAIL,
       payload :message
   })
   });




};

export const payOrder = (order , paymentResult) => (dispatch , getState) => {
    dispatch({
        type:ORDER_PAY_REQUEST ,
        payload: { order , paymentResult }
    });
    const {userLogin :{userInfo}}= getState();
    axios.put(`https://jumia-mearn.herokuapp.com/api/orders/${order._id}/pay `, paymentResult 
    // , {
    //     headers: {
    //         Authorization :`Bearer ${userInfo.token}`,
    //     }

    // }
     )

    .then((response) => { 
        // success 
        console.log(response.data)
       dispatch({
           type:ORDER_PAY_SUCCESS,
           payload :response.data
       });
     
   })  
   .catch(function (error) {
     console.log(error);
     const message = error.response && error.response.data.message?
     error.response.data.message: error.message
     dispatch({
       type:ORDER_PAY_FAIL,
       payload :message
   })
   });


}

// orderHistory
export const listOrderMine = () =>  (dispatch , getState) =>{
    dispatch({
        type:ORDER_MINE_LIST_REQUEST ,
    });
    const {userLogin :{userInfo}}= getState();
    axios.get('https://jumia-mearn.herokuapp.com/api/orders/mine' , {
        headers: {
            Authorization :`Bearer ${userInfo.token}`,
        }

    })
    .then((response) => { 
        // success 
        console.log(response.data)
       dispatch({
           type:ORDER_MINE_LIST_SUCCESS,
           payload :response.data
       });
    })  
    .catch(function (error) {
        console.log(error);
        const message = error.response && error.response.data.message?
        error.response.data.message: error.message
        dispatch({
          type:ORDER_MINE_LIST_FAIL,
          payload :message
      })
      });


}


