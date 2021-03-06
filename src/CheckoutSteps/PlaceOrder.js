import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import CheckoutSteps from './CheckoutSteps';
import './CheckoutSteps.css';
import {useTranslation} from 'react-i18next'

export default function PlaceOrder(props) {
    const cart = useSelector((state) => state.cart);
   if(!cart.paymentMethod){
       props.history.push('/payment')
   }
   const orderCreate = useSelector((state) => state.orderCreate);
   const {loading , success , error, order} = orderCreate;

   const toPrice = (num) => Number(num.toFixed(2)); //5.123 => "5.12" => 5.12
   cart.itemsPrice = toPrice(
       cart.cartItems.reduce((a , c) => a + c.qty * (c.price - c.discount) , 0)
       );
       cart.shippingPrice = cart.itemsPrice > 100? toPrice(0): toPrice(10);
       cart.taxPrice = toPrice(0.10 * cart.itemsPrice );
       cart. totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
       const dispatch = useDispatch();
       const placeOrderHandler =() => {
           console.log(cart.cartItems);
        dispatch(createOrder({...cart, orderItems: cart.cartItems}));

       }
       useEffect(() => {
           if(success){
               props.history.push(`/order/${order._id}`);
               console.log(props.history.push(`/order/${order._id}`));
               dispatch({type: ORDER_CREATE_RESET})
           }

       }, [dispatch, order, props.history, success])
       const {t , i18n} = useTranslation();


  return (
    <>
    <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
    <div class="row m-3" dir="auto" style={{textAlign: 'start'}}>
        <div class="col-lg-7 col-md-12 col-12">
            <div class="row p-3 mb-3 bg-light" style={{"border":"1px solid white"}}>
                <div class="col-12 mb-3">
                    <h5>{t('nShipping')}</h5>
                    <p>
                        <strong>{t('nFullName')}:</strong>{cart.shippingAddress.firstName} <br/>
                        <strong>{t('nAddress')}:</strong>{cart.shippingAddress.address},
                        {cart.shippingAddress.city},
                        {cart.shippingAddress.postalCode},
                        {cart.shippingAddress.country}
                    </p>
                </div>
            </div>
            <div class="row p-3 mb-3 bg-light" style={{"border":"1px solid white"}}>
                <div class="col-12 mb-3">
                <h5>{t('nPayment')}</h5>
                <p>
                        <strong>{t('nMethod')}:</strong>{cart.paymentMethod} <br/>
                </p>
                </div>
            </div>
            <div class="row p-3 mb-3 bg-light" style={{"border":"1px solid white"}}>
                <div class="col-12 mb-3">
                <h5>{t('nOrderItem')}</h5>
               {cart.cartItems.map((item) =>(
                <div key={item.product}  classNameName=" ">
                <div className="row mb-5 "  >
                    <div className="col-8  col-md-6 order-1 order-md-1 itemsT noPadding">
                        <div className="row" style={{ "height": "100%" }}>
                            <div className="col-md-2 col-4 noPadR "><a className="fr " ><img className="small " src={item.image} alt="" /></a></div>
                            <div className="col-md-10 col-8 noPadL">
                                <div className="seller"><span>{t('nseller')}: </span><span id="sellerName">{item.seller_name}</span></div>
                                <div className="itemName " ><Link className="text-decoration-none" to="/" >{localStorage.getItem('lang') == 'en'?item.name:item.nameAR}</Link></div>
                                <div className="itemNotes">{item.brand}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-4 order-2 order-md-3 unitPriceT noPadding">
                        <div className="itemPrice"><span> </span><span className="value">
                        {item.qty} x {t('nEGP')}{item.price - item.discount} = {t('nEGP')}{item.qty * (item.price - item.discount)}
                            {/*{item.discount ? item.price - item.discount : item.price}*/}
                            </span></div>
                    </div>
                </div>

            </div>
))}

               
                </div>
            </div>


        </div>
        <div class="col-lg-5 col-md-12 col-12">
            <div class="row ml-3 p-3 bg-light " style={{"border":"1px solid white"}}>
                <div class="col-12">
                <h5>{t('nOrderSummary')}</h5>
                <div class="row">
                <div class="col-6">
                    <p>Items</p>
                    </div>
                    <div class="col-6">
                    <p>{t('nEGP')}{cart.itemsPrice.toFixed(2)}</p>
                </div>
                </div>

                <div class="row">
                <div class="col-6">
                    <p>{t('nShipping')}</p>
                    </div>
                    <div class="col-6">
                    <p>{t('nEGP')}{cart.shippingPrice.toFixed(2)}</p>
                </div>
                </div>
                <div class="row">
                <div class="col-6">
                    <p>{t('nTax')}</p>
                    </div>
                    <div class="col-6">
                    <p>{t('nEGP')}{cart.taxPrice.toFixed(2)}</p>
                </div>
                </div>
                <div class="row">
                <div class="col-6">
                    <strong>{t('nOrderTotal')}</strong>
                    </div>
                    <div class="col-6">
                    <strong>{t('nEGP')}{cart.totalPrice.toFixed(2)}</strong>
                </div>
                </div>
                <button type="button" onClick={placeOrderHandler}
                disabled = {cart.cartItems.length === 0}
                
                className="btn btn-block lgnBtn mt-3">
                    Place Order
                </button>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}

                </div>
            </div>

        </div>

    </div>
    </>
  );
}