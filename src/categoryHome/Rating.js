import React from 'react';




 const Rating = (props) => {
    console.log(props);
    const{rating ,numReviews}=props;
  return (
      
     <>
      <div className="container ">
      <span class="rating">
         <i style={{color:'orange'}} class={ rating >= 1
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fas fa-star-half'
              : 'fa fa-star-o'}
             ></i>
         <i style={{color:'orange'}} class={
             rating >=2?  "fa fa-star": rating >= 1.5? 'fas fa-star-half':'fa fa-star-o'}></i>
         <i style={{color:'orange'}} class={
             rating >=3?  "fa fa-star": rating >= 2.5? 'fas fa-star-half':'fa fa-star-o'}></i>
        <i style={{color:'orange'}} class={
             rating >=4?  "fa fa-star": rating >= 3.5? 'fas fa-star-half':'fa fa-star-o'}></i>
        <i style={{color:'orange'}} class={
             rating >=5?  "fa fa-star": rating >= 4.5? 'fas fa-star-half':'fa fa-star-o'}></i>
        <span class="text-secondary pl-1">({numReviews})</span>
     </span>
     
      </div>
          
    </>
  );
}

export default Rating;