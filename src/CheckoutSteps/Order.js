import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder, payOrder } from '../actions/orderActions';
import { ORDER_PAY_RESET } from '../constants/orderConstants';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import CheckoutSteps from './CheckoutSteps';
import './CheckoutSteps.css';
import {useTranslation} from 'react-i18next'
export default function Order(props) {
  
   
       const orderId= props.match.params.id;
       // paypal 
       const [sdkReady , setSdkReady] = useState(false);
       const orderDetails = useSelector((state) => state.orderDetails);
       const { order , loading , error} = orderDetails;

       const orderPay = useSelector((state) => state.orderPay);
       const  {loading:loadingPay ,error : errorPay , success: successPay} = orderPay;
  
       const dispatch = useDispatch();



      /* useEffect(() => {
        dispatch(detailsOrder(orderId))


       },[dispatch, orderId ])*/
      
       useEffect(() => {
          const addPayPalScript = async () => {
               const { data} = await axios.get('https://jumia-mearn.herokuapp.com/api/config/paypal');
               const script = document.createElement('script');
               script.type="text/javascript";
               script.src=`https://www.paypal.com/sdk/js?client-id=${data}`;
               script.async = true;
               script.onload = () =>{
                setSdkReady(true);
               };
               document.body.appendChild(script);
           };
           //if order not found and successPay true
           if(!order || successPay || (order && order._id !== orderId)){
               dispatch({type: ORDER_PAY_RESET})
               dispatch(detailsOrder(orderId))
           }else{
               if(!order.isPaid){
                   if(!window.paypal){
                    addPayPalScript();
                   }else{
                    setSdkReady(true);

                   }

               }
           }
          

       }, [dispatch, orderId , order, sdkReady ]);

       const successPaymentHandler = (paymentResult) =>{
           //todo: dispatch pay order
           dispatch(payOrder(order , paymentResult));

       }
const {t , i18n} = useTranslation();

 return loading? (<LoadingBox></LoadingBox>):
  error? (<MessageBox variant="danger">{error}</MessageBox>)
  :
  (
    <>
    
    <h4>Order {order._id}</h4>
    <div class="row m-3" dir="auto" style={{textAlign: 'start'}} >
        <div class="col-lg-7 col-md-12 col-12">
            <div class="row p-3 mb-3 bg-light" style={{"border":"1px solid white"}}>
                <div class="col-12 mb-3">
                    <h5>{t('nShipping')}</h5>
                    <p>
                        <strong>{t('nFullName')}:</strong>{order.shippingAddress.firstName} <br/>
                        <strong>{t('nAddress')}:</strong>{order.shippingAddress.address},
                        {order.shippingAddress.city},
                        {order.shippingAddress.postalCode},
                        {order.shippingAddress.country}

                    </p>
                    {
                    order.isDelivered ? <MessageBox variant = "success"> Delivered at {order.deliveredAt}</MessageBox>
                    :
                    <MessageBox variant="danger">{t('nNotDelivered')}</MessageBox>
                    }
                    

                </div>
            </div>
            <div class="row p-3 mb-3 bg-light" style={{"border":"1px solid white"}}>
                <div class="col-12 mb-3">
                <h5>{t('nPayment')}</h5>
                <p>
                        <strong>{t('nMethod')}:</strong>{order.paymentMethod} <br/>
                </p>
                {
                    order.isPaid ? <MessageBox variant = "success"> Paid at {order.paidAt}</MessageBox>
                    :
                    <MessageBox variant="danger">{t('nNotpaid')}</MessageBox>
                    }
                    
                </div>
            </div>
            <div class="row p-3 mb-3 bg-light" style={{"border":"1px solid white"}}>
                <div class="col-12 mb-3">
                <h5>{t('nOrderItem')}</h5>
                {/*Object.values(orderItems)*/}
               {order.orderItems.map((item) =>(
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
                        {item.qty} x {t('nEGP')}{item.discount? (item.price - item.discount) :  item.price } = {t('nEGP')}{item.discount ? item.qty * (item.price - item.discount) : item.qty * (item.price) }
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
                    <p>{t('nEGP')}{order.itemsPrice.toFixed(2)}</p>
                </div>
                </div>

                <div class="row">
                <div class="col-6">
                    <p>{t('nShipping')}</p>
                    </div>
                    <div class="col-6">
                    <p>{t('nEGP')}{order.shippingPrice.toFixed(2)}</p>
                </div>
                </div>
                <div class="row">
                <div class="col-6">
                    <p>{t('nTax')}</p>
                    </div>
                    <div class="col-6">
                    <p>{t('nEGP')}{order.taxPrice.toFixed(2)}</p>
                </div>
                </div>
                <div class="row">
                <div class="col-6">
                    <strong>{t('nOrderTotal')}</strong>
                    </div>
                    <div class="col-6">
                    <strong>{t('nEGP')}{order.totalPrice.toFixed(2)}</strong>
                </div>
                </div>

                {
                    !order.isPaid && (
                        <li>
                            {!sdkReady? (<LoadingBox></LoadingBox>):
                            (
                                <>
                                {errorPay && (
                                <MessageBox variant="danger">{errorPay}</MessageBox>
                                )}
                                {loadingPay  && <LoadingBox></LoadingBox>}
                                <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler}></PayPalButton>
                                </>
                            )
                            
                             }
                        </li>
                    )
                }


               
                

                </div>
            </div>

        </div>

               </div>
    
    
    </>
               );
}