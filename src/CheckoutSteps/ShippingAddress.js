import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from './CheckoutSteps';
import {useTranslation} from 'react-i18next'


export default function ShippingAddress(props) {
    const userLogin =useSelector (state => state.userLogin);
    const {userInfo} =userLogin ;
    if(!userInfo){
        props.history.push('/login')
    }
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [firstName, setFullName] = useState(shippingAddress.firstName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({firstName , address , city , postalCode, country}))
        // todo: dispatch save shipping address action 
        props.history.push('/payment')
    }
    const {t , i18n} = useTranslation();

    return(
        <>
        <CheckoutSteps step1 step2 ></CheckoutSteps>
        <div dir="auto" style={{textAlign: 'start'}} className="container formContainer">
        <h4>Shipping Address</h4>
        <form dir="auto" style={{textAlign: 'start'}} action="" onSubmit={submitHandler} className="mb-5 mt-3">
            <div className="form-group">
            <label htmlFor="fullName">{t('nFullName')}</label>
          <input
            type="text" className="form-control"
            id="firstName"
            placeholder="Enter full name"
            value={firstName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
            </div>
            <div className="form-group">
            <label htmlFor="address">{t('nAddress')}</label>
          <input
            type="text" className="form-control"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
          </div>
            <div className="form-group">
            <label htmlFor="city">{t('nCity')}</label>
          <input
            type="text" className="form-control"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
            </div>

            <div className="form-group">
            <label htmlFor="postalCode">{t('nPostalCode')}</label>
          <input
            type="text" className="form-control"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
            </div>

            <div className="form-group">
            <label htmlFor="country">{t('nCountry')}</label>
          <input
            type="text" className="form-control"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
           
            </div>

            <button type="submit" className="btn btn-block lgnBtn">{t('nContinue')}</button>
        </form>
        </div>
        
        
        </>
    )
  
}