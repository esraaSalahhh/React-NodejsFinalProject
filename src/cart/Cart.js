import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

import './Cart.css';
import cartEmpty from '../assets/images/empty-cart.png';
import {useTranslation} from 'react-i18next'



 const Cart = (props) => {
    console.log(props);
   
  

    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    
    

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;
   
    useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));

    }
    
  }, [dispatch, productId , qty]);

  const removeFromCartHandler = (productId) => {
    // delete action
    dispatch(removeFromCart(productId));
  };
  

  const checkoutHandler = () => {
    props.history.push('/login?redirect=shipping');
  };
  const {t , i18n} = useTranslation();
 
  return (
      
     <>
      
        <div dir="auto" style={{textAlign: 'start'}} classNameName="container " style={{ "width": "70%", margin:"auto"}} >
                  <div dir="auto" style={{textAlign: 'start'}} className="cartTitle"><span>{t('cart')}</span> <span className="itemsNo" id="itemsNo">
                    ({cartItems.reduce((a, c) => a +  c.qty, 0)} {t('nitems')})
                    </span></div><br/>
                  
                {cartItems.length === 0? 
                  <section classNameName={` disapear`} className="noItems" id="noItems" style={{"background-color": "#f5f5f5", "width": "100%"}}>
                      <img src={cartEmpty} width={"160"} height={"160"} alt=""/><br/>
                      <span className="bigGray">{t('nYourcartisempty')}</span><br/>
                      <span className="notSigned">Already have an account?<Link to="/login"  className="lgn"> Login </Link>to see the items in your cart.</span><br/>
                      <Link to="/" className="startShoppingA"><div className="startShoppingD">{t('nSTARTSHOPPING')}</div></Link>
                  </section>:
                  (
                    <div id="items">
                      {
                        cartItems.map((item) =>(
                          <div key={item.product} classNameName="container ">
                          <section className="itemsList" >
          
                              <div className="row titles" >
                                  <div className="col-6 titlesA">{t('nITEM')}</div>
                                  <div className="col-2 titlesB">{t('nQUANTITY')}</div>
                                  <div className="col-2 titlesB">{t('nUNITPRICE')}</div>
                                  <div className="col-2 titlesB">{t('nSUBTOTAL')}</div>
                              </div>
                          </section>
                          <div className="row mb-5 " >
                              <div className="col-8  col-md-6 order-1 order-md-1 itemsT noPadding">
                                  <div className="row" style={{ "height": "100%" }}>
                                      <div className="col-md-2 col-4 noPadR"><a className="fr " ><img className="small" src={item.image} alt="" /></a></div>
                                      <div className="col-md-10 col-8 noPadL" dir="auto" style={{textAlign: 'start'}}>
                                          <div className="seller"><span>{t('nseller')}: </span><span id="sellerName">{item.seller_name}</span></div>
                                          <div className="itemName" ><Link to="/productDetails/${item._id}" >{localStorage.getItem('lang') == 'en'?item.name:item.nameAR}</Link></div>
                                          <div className="itemNotes">{item.brand}</div>
                                          <div className="row " style={{ "margin-bottom": "10px" }}>
                                              {/*<div className="col-md-6 col-1 toSavedItems" ><i className="far fa-heart"></i><span className="bb">  MOVE TO SAVED ITEMS</span></div>*/}
                                              <button type="button"
                                                  className="col-md-6 col-1 removeItem btn btn-outline-none" onClick={() => removeFromCartHandler(item.product)}
                                              ><i className="fas fa-trash"></i><span className="bb">  {t('nREMOVE')}</span></button>
                                          </div>
                                      </div>
          
                                  </div>
                              </div>
                              <div className="col-md-2 col-6 order-3 order-md-2 quantityT noPadding">
                                  <div className="form-group" >
                                      <select value={item.qty}
                                          onChange={(e)=> dispatch(
                                            addToCart(item.product , Number(e.target.value))
                                          )
                                           
          
                                          }
          
                                          className="form-control sel">

                                          {[...Array(item.countInStock).keys()].map((x) => (
                                              <option key={x + 1} value={x + 1}>
                                                  {x + 1}
                                              </option>
                                          ))}
                                      </select>
          
                                  </div>
          
                              </div>
                              <div className="col-md-2 col-4 order-2 order-md-3 unitPriceT noPadding">
                                  <div className="itemPrice"><span>{t('nEGP')} </span><span className="value">{item.discount ? item.price - item.discount : item.price}</span></div>
                                  {!item.discount ? "" :
                                      <div className="oldPrice"><span>{t('nEGP')} </span><span className="oldValue">{item.price}</span></div>}
                                  {!item.discount ? "" :
                                      <div className="saving"><span>{t('nSaving')}: {t('nEGP')} </span><span className="savedValue">{item.discount}</span></div>}
                              </div>
                              <div className="col-md-2 col-6 order-4 order-md-4 subtotalT noPadding">
                                  <div className="sTot"><span>{t('nEGP')} </span><span className="value sbTot" >
                                      {item.qty * (item.price - item.discount)}
                                      
                                  </span></div>
                              </div>
                          </div>
          
                      </div>
          
           
                        ))}
                          <div className="row" id="itemsListTot"><div className="col-1 col-md-9"></div>
                     <div className="col-12 col-md-3 tots">
                       
                       <span><span className="totTitle">{t('nTotal')}:</span><span className="tot">{t('nEGP')} <span id="totalPrice">
                       {cartItems.reduce((a, c) => a + (c.price - c.discount) * c.qty, 0)}
                        



                         </span></span><br/><span className="totNote">{t('norderiseligible')}</span></span>
      
                  </div></div>
                        <div id="itemsListCTC" className="container-fluid" style={{"background-color": "white", "box-shadow": "0px 0px 5px rgba(158, 158, 158, 0.438)", "width": "100vw",  "margin": "30px 0px" ,  "padding": "10px 0px"}}>
                  <div className="container" dir="auto" style={{textAlign: 'start'}} >
                      <div className="row"> 
                      <div className="col-md-6 col-1"></div>
                      <div className="col-md-6 col-12" style={{"background-color": "rgba(172, 255, 47, 0)"}}>
                              <Link to="/"><div className="CS" style={{"display": "inline-block", "padding": "15px 15px", "margin-right": "20px", "background-color": "rgb(255, 255, 255)", "box-shadow": "0px 0px 5px rgba(190, 190, 190, 0.726)", "color": "darkorange", "font-size": "17px", "font-weight": "600"}}><span style={{"margin": "auto"}}>{t('nContinueShopping')}</span> </div></Link>
                              
                          <button className="CTC" disabled={cartItems.length === 0} onClick={checkoutHandler}
                           style={{"display": "inline-block", "padding": "15px 8px", "background-color":"darkorange", "color":  "rgb(255, 255, 255)",  "font-size": "17px", "font-weight": "600 ", "outline":"none", border:"none"}}>{t('nContinuetoCheckout')}</button>
      
      
                      </div>
                  </div>
                      
              </div>
              </div>


                      </div>
                  )}
                  
      </div>
    </>
  );
}

export default Cart;