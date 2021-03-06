import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cart from '../cart/Cart';
import './Home.css';
import {useTranslation} from 'react-i18next'


const Product = (props) => {
    // console.log(props);
    const { product } = props;
    const addToCartHandler = () => {
      console.log(props);
      //props.history.push(`/cart/${productId}?qty=${qty}`);
      //props.history.push({`/cart/${product._id}`});
    };
    const {t , i18n} = useTranslation();
  return (
      
     <>
      <div dir="auto" style={{textAlign: 'start'}} key={product._id} class="col-lg-2 col-md-4 col-sm-4 col-4 shadoww" style={{"float": "left"}} > 
     {/* onclick="item()" */}
     {/* {getpro()} */}
     {/* {console.log(prod)} */}
     <Link  to={{ pathname: `/productDetails/${product._id}`, data: props }} class="text-decoration-none" style={{"color":"black"}}>
                <div  class="card bordernone marg">
                  <img class="card-img-top" src={product.image} alt="Card image" style={{"width":"100%"}} />
                  <div class="card-body cardbody">
                    <span class="card-title small">{localStorage.getItem('lang') == 'en'?product.name:product.nameAR}</span><br />
                    <span class="aftprice">{t('nEGP')}  {product.price-product.discount}</span><br />
                    <span class="befprice">{t('nEGP')}  {product.price}</span>
                  </div>
                </div>
                </Link>
              </div>


                       
    </>
  );
}

export default Product;