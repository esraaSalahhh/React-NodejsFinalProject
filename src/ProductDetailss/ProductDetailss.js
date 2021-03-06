import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import './ProductDetailss.css';
import { Link } from 'react-router-dom';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import axios from 'axios';
import img1 from '../assets/homeimages/A.jpg';
import Review from '../Review/Review';
import {useTranslation} from 'react-i18next';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ProductDetailss = (props) => {
  const {t , i18n} = useTranslation();
  // console.log(props.location.data.product.name);
  let routeState
  if (props.location.data) {
    localStorage.setItem('routeState', JSON.stringify(props.location.data))
    routeState = props.location.data
  } else {
    routeState = localStorage.getItem('routeState')
    if (routeState) routeState = JSON.parse(routeState)
  }
  console.log(routeState);
  const [rev, setrev] = useState(null);
  const [productdet, setproductdet] = useState(null);


  useEffect(() => {
    axios.get(`https://jumia-mearn.herokuapp.com/api/threereviews/${routeState.product._id}`)
      .then(function (response) {
        console.log(response.data);
        setrev(response.data);
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
        <div className="row"  >
          <div className="divstyle col-lg-9 col-12">
            <br />
            <div className="row">
              <div className="col-lg-5  col-12">
              <TransformWrapper defuitScale={1} defaultPositionX ={100} defaultPositionY={200} >
              <TransformComponent>
                <img className="montg" src={routeState.product.image} width="305" height="305" />
                </TransformComponent>
                </TransformWrapper>
                <br />
                <p>{t("Eshare")}</p>
                <div
                  style={{ "border": "1px solid black", "width": "30px", "text-align": "center", "border-radius": "100%", "display": "inline-block" }}>
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div
                  style={{ "border": "1px solid black", "width": "30px", "text-align": "center", "border-radius": "100%", "display": "inline-block" }}>
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
              <div className="col-lg-5 col-12">
                <p className="p">{localStorage.getItem('lang') == 'en'?routeState.product.name:routeState.product.nameAR}</p>
                <p> {t("Ebrand")}:<a className="text-decoration-none" href=" Rehana | Similar products from Rehana"> {routeState.product.brand}</a> </p>
                {productdet ? (productdet.map((details, index) =>
                <div key={index}>
               <p className="i" style={{ "color": "darkorange", "font-size": "13px" }}>
                <Rater style={{ fontSize: '25px' }} total={5} rating={details.rating.toFixed(1)} interactive={false} />
                   <a>({details.rating.toFixed(1)} {t("Erating")}) </a> </p>
                   </div>
                   )) : (<h2>Loading</h2>)}
                
                <hr />
                <p><b style={{ "font-size": "25px" }}> {t("Eegp")} {routeState.product.price - routeState.product.price * routeState.product.discount / 100}</b></p>
                <div><del style={{ "color": "gray" }}>{t("Eegp")} {routeState.product.price} </del>&nbsp; <span
                  style={{ "color": "darkorange", "font-size": "14px", "width": "15px", "height": "15px" }}>{routeState.product.discount}%</span></div>
                  <Link to={`/cart/${routeState.product._id}`} class="text-decoration-none" style={{ "color": "white" }}>
                <button type="button" className="btn  d-xl-block"
                  style={{ "width": "100%", "background-color": "darkorange", "color": "white", "font-size": "14px", "font-weight": "600", "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                  <div style={{
                    "display": "inline-block",
                    "text-align": "left"
                  }}>
                    <i className="fas fa-cart-plus" style={{ "font-size": "20px" }}></i>
                  </div>
                    <div style={{
                      "display": "inline-block",
                      "text-align": "center"
                    }}>
                      {t("Eaddtocart")}
                        </div>
                </button>
                </Link>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="divstyle col-lg-2 col-12" >
            <div>
              <p style={{ "fontWeight": "600", "fontSize": "14px", "marginTop": "20px" }}> {t("Edrlivery")}</p><hr />
              <p style={{ "font-size": "12px" }}>{t("Eexpress")}</p>
              <hr />
              <div>
                <div style={{ "width": "10px ", "margin-left": "10px" }}> </div>&nbsp;
                            <h style={{ "font-size": "12px" }}> <i className="fas fa-truck" style={{ "font-size": "20px" }}></i><span style={{"fontWeight":"600"}}>{t("Edoordeliv")}</span> </h>
              </div>
              <p style={{ "font-size": "13px", "margin-left": "20px " }}>{t("Eready")}
                <hr />
              </p>
              <h style={{ "margin-left": "17px " }}> {t("Ereaturn")} </h>
              <p style={{ "font-size": "13px", "margin-left": "15px" }}> {t("Edeli")} </p>
            </div>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-lg-12 col-md-12 ">
            <img src={img1} className="img-fluid" />
          </div>
        </div> <br />


        <div className="row " style={{ "margin-top": "0px" }}>
          <div className="col-sm-12 divstyle">
            <div>
              <h1 style={{ "font-size": "20px","marginTop":"10px" }}>{t("Edetails")} </h1>
              <hr /><br />
              <div className="row">
              {productdet ? (productdet.map((details, index) =>
             <p style={{"marginLeft":"15px"}}> {localStorage.getItem('lang') == 'en'?details.description:details.descriptionAR} </p>
             )) : (<h2>Loading</h2>)}
               
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ "margin-top": "20px", }}>
          <div className="col-sm-9 col-lg-12 col-12 divstyle ">
          <div className="row" >
            <div className="col-9">
          <h2 style={{ "font-size": "20px","marginLeft":"20px","marginTop":"20px" }}> {t("Efeedback")} </h2>
          </div>
          <div className="col-3" style={{"marginTop":"20px"}}>
          <Link to={{ pathname: `/allreview/${routeState.product._id}`}} class="text-decoration-none" style={{ "color": "darkorange","fontWeight":"600" }}> {t("Eseeall")} <i class="fas fa-angle-right"></i></Link>
          </div>
          </div>
          <hr/>
            <div className="row">
              <div className="col-sm-4 col-md-4 col-12 ">
                <div style={{ "text-align": "center",  }}>
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
              <div className="col-sm-8 col-md-8 col-12 ">
                <p> {t("Ereview")} </p>
                {rev ? (rev.map((revi, index) =>
                  <Review key={revi._id} review={revi}/>
                )) : (<h2>Loading</h2>)}

<Link  to={{ pathname: `/addreview`}} class="text-decoration-none" style={{"color":"black"}}>
<button type="button" className="btn d-sm-block d-xl-block "
                  style={{ "width": "100%", "background-color": "darkorange", "color": "white", "font-size": "14px", "font-weight": "600", "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)", "padding-left": "5px", "padding-right": "5px" }}>
                <div style={{
                      "display": "inline-block",
                      "width": "30%",
                      "text-align": "center"
                    }}>
                      {t("Eaddreview")}
                        </div>
                </button>
</Link>
<br/>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br/><br/><br/><br/>
      </Container>
    </>
  );
}

export default ProductDetailss;

