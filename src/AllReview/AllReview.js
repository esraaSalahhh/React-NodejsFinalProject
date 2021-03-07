import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import axios from 'axios';
import Review from '../Review/Review';
import {useTranslation} from 'react-i18next'


const AllReview = (props) => {
  const {t , i18n} = useTranslation();

  // console.log(props.location.data.product.name);
  let routeState

    routeState = localStorage.getItem('routeState')
    if (routeState) routeState = JSON.parse(routeState)
  
  console.log(routeState);
  const [allrev, setallrev] = useState(null);
  const [productdet, setproductdet] = useState(null);


  useEffect(() => {
    // `http://localhost:3000/api/threereviews/${routeState.product._id}`
    axios.get(`https://jumia-mearn.herokuapp.com/api/reviews/${routeState.product._id}`)
      .then(function (response) {
        console.log(response.data);
        setallrev(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get(`https://jumia-mearn.herokuapp.com/api/getproducts/${routeState.product._id}`)
    .then(function (response) {
      console.log(response.data);
      setproductdet(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }, []);


  return (

    <>

<Container dir="auto" style={{textAlign: 'start'}}>
        <br /><br />


        <div className="row" style={{ "margin-top": "20px"}}>
         
          <div className="col-12  divstyle ">
          <div className="row" >
          <Link to={{ pathname: `/productDetails/${routeState.product._id}`}} class="text-decoration-none" style={{ "color": "black","marginLeft":"20px","fontWeight":"600","marginTop":"20px" }}><i class="fas fa-arrow-left"></i></Link>

          <h2 style={{ "font-size": "20px","marginLeft":"15px","marginTop":"20px" }}> {t("Efeedback")} </h2>
          </div>
          <hr/>
            <div className="row">
              <div className="col-3  ">
                <div style={{ "text-align": "center", "width": "150px"}}>
                {productdet ? (productdet.map((details, index) =>
                <div>
                  <p style={{ "fontSize": '13.5px',"fontWeight":"600" }}>{t("Erate")} ({details.numReviews}) </p>
                <div key={index} style={{"backgroundColor":"#f5f5f5","paddingTop":"10px","paddingBottom":"10px","width":"200px"}}>
                  <p style={{ "color": "darkorange", "font-size": "25px","fontWeight":"600" }}>{details.rating.toFixed(1)}/5 </p>
                   <Rater style={{ fontSize: '35px' }} total={5} rating={details.rating.toFixed(1)} interactive={false} />
                   <p> {details.numReviews} {t("Erating")} </p>
                  </div>
                  </div>
                   )) : (<h2>Loading</h2>)}
                   <br/>
                </div>
              </div>
              <div className="col-sm-8">
                <p> {t("Ereview")}</p>
                {allrev ? (allrev.map((revi, index) =>
                  <Review key={revi._id} review={revi}/>
                )) : (<h2>Loading</h2>)}
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br/><br/>
      </Container>
    </>
  );
}

export default AllReview;