
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from './CheckoutSteps';
import './CheckoutSteps.css';
import {useTranslation} from 'react-i18next'



export default function PaymentMethod (props) {
  const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if(!shippingAddress.address){
      props.history.push('/shipping')
    }
  const [paymentMethod,setPaymentMethod] = useState('paypal');
  const dispatch = useDispatch();
  const submitHandler =(e) =>{
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');

  }
  const {t , i18n} = useTranslation();
  return (
    <>
    <CheckoutSteps step1 step2 step3></CheckoutSteps>
    
    <div dir="auto" style={{textAlign: 'start'}} className="container formContainer">
    <h2>Payment</h2>
        <form  dir="auto" style={{textAlign: 'start'}} action="" onSubmit={submitHandler} className="mb-5 mt-3">
            <div className="form-check m-2" >
            
          <input
            type="radio" className="form-check-input" 
            id="paypal"
            value="paypal"
            name="paymentMethod"
            required
            checked onChange={(e) => setPaymentMethod(e.target.value)}
          ></input>
          <label  className="form-check-label" htmlFor="paypal">Paypal</label>
            </div>

            {/* <div className="form-check m-2">
            <input
              type="radio" className="form-check-input"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
               onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label className="form-check-label" htmlFor="stripe">Stripe</label>
              </div> */}
              <button type="submit" className="btn  lgnBtn m-4">{t('nContinue')}</button>
            </form>
            </div>
    </>
  );
}