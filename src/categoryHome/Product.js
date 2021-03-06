import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cart from '../cart/Cart';
import {useTranslation} from 'react-i18next'



const Product = (props) => {
    console.log(props);
    const [qty, setQty] = useState(1);
    const { product } = props;
    const addToCartHandler = () => {
      console.log(props);
      //props.history.push(`/cart/${productId}?qty=${qty}`);
      //props.history.push({`/cart/${product._id}`});
    };
    const {t , i18n} = useTranslation();
  return (
      
     <>
<div dir="auto" style={{textAlign: 'start'}} key={product._id} className="col-lg-3 col-md-6 col-sm-6  p-2  rounded  moveCol btnVisable">
                        <Link  to={`/product/${product._id}`} className="text-decoration-none">
                        <img dir="auto" style={{textAlign: 'start'}} src={product.image} width={"100%"} />
                        <div style={{"height": "230px"}}>
                           <span className="bg-danger text-white small">Offical Store</span>

                            <p className="small text-capitalize">{localStorage.getItem('lang') == 'en'?product.name:product.nameAR} 
                                <span className="d-block font-weight-bold text-uppercase">
                                {t('nEGP')}{product.price - product.discount}
                                </span>
                                <span className=" text-uppercase small text-secondary">
                                    <del>{t('nEGP')} {product.price}</del>
                                </span>
                            </p>
                            <Rating rating={product.rating}  numReviews={product.numReviews}/>
                            
                            <span className="d-block text-capitalize small ">eligble for free shopping</span>
                        
                        </div>
                        </Link>
                        {product.countInStock > 0 && (
                    <>
                      
                        <div className="row m-2" dir="auto" style={{textAlign: 'start'}}>
                          <div>{t('nQty')}</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      
                       
                      
                    </>
                                )}
                        
                          
                        <Link  to={`/cart/${product._id}?qty=${qty}`} onClick={addToCartHandler} role="button" class="btn btn-warning text-white btn-block btnHidden">{t('Eaddtocart')}
                        </Link>
                        
                        

                    </div>
                       
    </>
  );
}

export default Product;