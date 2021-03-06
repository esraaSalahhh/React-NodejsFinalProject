import React, { useEffect, useState } from 'react';



import { useSelector , useDispatch} from 'react-redux';
import { detailsProducts, listProducts } from '../actions/productActions';
import Product from './Product';


 const HomeCategory = (props) => {
  console.log(props);
   
 
   // console.log(Object.values(products).length);
  /* const dispatch = useDispatch();
   const productId = props.match.params.id;
   const productDetails = useSelector(state => state.productDetails);
   const {product} = productDetails;
   useEffect(() => {
    if (productId) {
      dispatch(detailsProducts(productId));
    }
  }, [dispatch, productId]);*/
  const productList = useSelector(state => state.productList);
  const {loading ,error, products} =productList ;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  },[dispatch])
  console.log(products)

  return (
      
     <>
      <div className="container ">
      <div className="row">  
        
         {products?(Object.values(products).map(product => (
           <Product key={product._id} product={product}
          />            


          ))):(<h1>Loading</h1>)}
          )
        
      </div>
      </div>
      
    </>
  );
}

export default HomeCategory;