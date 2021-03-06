import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import Product from '../categoryHome/Product';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';

export default function SearchScreen(props) {
    const { name = 'all' } = useParams();
      const dispatch= useDispatch();
      const productList = useSelector((state) => state.productList);
      const { loading, error, products } = productList;
      useEffect(() => {
        dispatch(
          listProducts({
            
            name: name !== 'all' ? name : '',
          
          })
        );
      }, [dispatch,name]);
 
  return (
      <>
      <div className="row">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>{products.length} Results</div>
        )}
        </div>
        <div className="row top">
        <div className="col-4">
          <h3>Department</h3>
          <ul>
              <li>
                  category 1
              </li>
          </ul>
          </div>
          <div className="col-3">
          {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
           <div className="row">  
        
          {products?(Object.values(products).map(product => (
            <Product key={product._id} product={product}
           />            
 
 
           ))):(<h1>Loading</h1>)}
           )
         
       </div>
        )}

          </div>
          </div>

      </>

  )
}