import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SET_TOTAL ,
     CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD} from "../constants/cartConstants";

export const addToCart = (productId , qty) => (dispatch ,getState) => {
    
    axios.get(`https://jumia-mearn.herokuapp.com/api/products/${productId}`)
    .then((response) => { 
         // success 
         console.log(response)
        dispatch({
            type: CART_ADD_ITEM,
            payload :{
                name:response.data.name,
                nameAR:response.data.nameAR,
                image:response.data.image,
                price:response.data.price,
                seller_name:response.data.seller_name,
                description:response.data.description,
                brand:response.data.brand,
                discount:response.data.discount,
                countInStock:response.data.countInStock,
                product:response.data._id,
                qty,
                
                //qty:response.data.max_qty,

            },

        });
        console.log(response)
        localStorage.setItem('cartItems' , JSON.stringify(getState().cart.cartItems));
       console.log(response.data)

        
        
    })  
    .catch(function (error) {
      console.log(error);
      
    });
   

    }
    export  const removeFromCart = (productId) => (dispatch, getState) =>{
        dispatch({type: CART_REMOVE_ITEM, payload: productId})
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    }
   

    export  const saveShippingAddress = (data) => (dispatch) =>{
        dispatch({type: CART_SAVE_SHIPPING_ADDRESS, payload:data })
        localStorage.setItem('shippingAddress', JSON.stringify(data));
       
    }
    export const savePaymentMethod =(data) =>(dispatch) =>{
        dispatch({type: CART_SAVE_PAYMENT_METHOD, payload: data});
       // localStorage.setItem('paymentMethod', JSON.stringify(data));

    }
    

    