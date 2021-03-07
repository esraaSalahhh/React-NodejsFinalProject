import React, { useEffect ,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/actions/product';
import Product from './Product';
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios';
import './Home.css';
import img1 from '../assets/homeimages/Slider-Desktop-EN_ch.jpg';
import img2 from '../assets/homeimages/Slider-Desktop-EN_.jpg';
import img3 from '../assets/homeimages/Slider-Desktop-EN_ (1).jpg';
import img4 from '../assets/homeimages/Slider-Desktop-EN_ (2).jpg';
import img5 from '../assets/homeimages/Slider-Desktop-EN_ (3).jpg';
import img6 from '../assets/homeimages/Slider-Desktop-EN_1424_x_768.jpg';
import img7 from '../assets/homeimages/Slider-Desktop-EN_ (4).jpg';
import img8 from '../assets/homeimages/super1.jpg';
import img9 from '../assets/homeimages/Artboard_1_copy_2-2.jpg';
import img10 from '../assets/homeimages/JumiaMall_.png';
import img11 from '../assets/homeimages/JumiaGlobal (1).png';
import img12 from '../assets/homeimages/JumiaOne_1.png';
import img13 from '../assets/homeimages/featured-sellers.png';
import img14 from '../assets/homeimages/JumiaMall_.png';
import img15 from '../assets/homeimages/JumiaGlobal (1).png';
import img16 from '../assets/homeimages/JumiaOne_1.png';
import img17 from '../assets/homeimages/Artboard_1222.png';
import img18 from '../assets/homeimages/CallToOrder.png';
import img19 from '../assets/homeimages/95854816_661562921367248_5676368515154575360_n.png';
import img20 from '../assets/homeimages/reward.jpg';
import img21 from '../assets/homeimages/featured-sellers.png';
import img22 from '../assets/homeimages/Artboard_1_copy_12.jpg';
import img23 from '../assets/homeimages/Artboard_1_copy_17.jpg';
import img24 from '../assets/homeimages/Artboard_1_copy_16.jpg';
import img25 from '../assets/homeimages/Artboard_1_copy_15.jpg';
import img26 from '../assets/homeimages/Artboard_1_copy_13-2.jpg';
import img27 from '../assets/homeimages/Artboard_1_copy_14.jpg';
import img28 from '../assets/homeimages/Artboard_1.png';
import img29 from '../assets/homeimages/Artboard_1_copy_7-2.png';
import img30 from '../assets/homeimages/190-140.png';
import img31 from '../assets/homeimages/Artboard_1_copy_8-2.png';
import img32 from '../assets/homeimages/Artboard_1_copy_12-2.png';
import img33 from '../assets/homeimages/Artboard_1_copy_18.png';
import img34 from '../assets/homeimages/Floor-Desktop-en_copy.jpg';
import img35 from '../assets/homeimages/Artboard_1_copy_13-2.png';
import {useTranslation} from 'react-i18next'

import { Container } from 'reactstrap';

 const Home = (props) => {
  const products = useSelector(state => state.products);
  const [prod, setprod] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    axios.get('https://jumia-mearn.herokuapp.com/api/productsdiscount')
    .then(function (response) {
        console.log(response);
        setprod(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });

  }, []);
  const {t , i18n} = useTranslation();
  return (
       <>
     <Container dir="auto" style={{textAlign: 'start' , marginTop:"10px"}}>
      <div className="row" >
      <div className="col-lg-2 divstyle d-none d-lg-block">
      <Link to="/productDetails" className="aa"><i className="fas fa-apple-alt" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}> {t("suber")}</span></Link><br/>
      <Link to="/login" href="productPage.html" className="aa"><i className="fas fa-vest" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}> {t('fasion')}</span></Link><br/>
      <Link to="/" href="productPage.html" className="aa"><i className="fas fa-feather-alt" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}>{t('healty')}</span></Link><br/>
      <Link to="/" className="aa"><i className="fas fa-child" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}>{t('baby')}</span></Link><br/>
      <Link to="/" className="aa"><i className="fas fa-mobile-alt" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}> {t('phones')}</span></Link><br/>
      <Link to="/category" className="aa"><i className="fas fa-home" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}>{t('nhome')}</span></Link><br/>
      <Link to="/" className="aa"><i className="fas fa-laptop" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}>{t('electro')}</span></Link><br/>
      <Link to="/" className="aa"><i className="fas fa-desktop" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}> {t('computer')}</span></Link><br/>
      <Link to="/" className="aa"><i className="fas fa-dumbbell" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}>{t('sport')}</span></Link><br/>
      <Link to="/" className="aa"><i className="fas fa-gamepad" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}>{t('game')}</span></Link><br/>
      <Link to="/" className="aa"><i className="fas fa-car" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}> {t('outomobile')}</span></Link><br/>
      <Link to="/" className="aa"><i className="fas fa-ellipsis-h" style={{"padding": "8px"}}></i><span style={{"fontSize": "13px"}}> {t('other')}</span></Link><br/>
      </div>
      <div className="col-lg-8 col-md-12 col-sm-12">
      <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            <li data-target="#demo" data-slide-to="4"></li>
            <li data-target="#demo" data-slide-to="5"></li>
            <li data-target="#demo" data-slide-to="6"></li>
            <li data-target="#demo" data-slide-to="7"></li>
          </ul>
          <div className="carousel-inner">
          <div className="carousel-item active" style={{"paddingLeft": "0px"}}>
              <img src={img1} width="100%" style={{"borderRadius": "4px"}}/>
            </div>
            <div className="carousel-item">
              <img src={img2} width="100%" style={{"borderRadius": "4px"}}/>
            </div>
            <div className="carousel-item">
              <img src={img3} width="100%" style={{"borderRadius": "4px"}}/>
            </div>
            <div className="carousel-item">
              <img src={img4} width="100%" style={{"borderRadius": "4px"}}/>
            </div>
            <div className="carousel-item">
              <img src={img5} width="100%" style={{"borderRadius": "4px"}}/>
            </div>
            <div className="carousel-item">
              <img src={img6} width="100%" style={{"borderRadius": "4px"}}/>
            </div>
            <div className="carousel-item">
              <img src={img3} width="100%" style={{"borderRadius": "4px"}}/>
            </div>
            <div className="carousel-item">
              <img src={img7} width="100%" style={{"borderRadius": "4px"}}/>
            </div>

          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
      </div>
      </div>
      <div className="col-lg-2 d-none d-lg-block">
        <div className="row" style={{"marginBottom": "15px"}}>
          <a href="productPage.html"><img src={img8} width="100%" height="188px;" style={{"borderRadius": "4px"}}/></a>

        </div>
        <div className="row">
            <a href="productPage.html"><img src={img9} width="100%" height="188px;" style={{"borderRadius": "4px"}}/></a>
        </div>
      </div>
      </div>


      <div className="row d-none d-lg-block" style={{"margin-top": "20px"}}>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-6" style={{"padding-left": "0px"}}>
            <div className="col-lg-12 divstyle s" style={{"padding-left": "15px"}}>
              <img src={img10} width="40px" height="40px" /><span className="spanstyle">{t('mall')}</span>
            </div>

          </div>
          <div className="col-lg-3 col-md-6 col-6" style={{"padding-left": "0px"}}>
            <div className="col-lg-12 divstyle s">
              <img src={img11} width="40px" height="40px" /><span className="spanstyle">Jumia Global</span>
            </div>

          </div>
          <div className="col-lg-3 col-md-6 col-6" style={{"padding-left": "0px"}}>
            <div className="col-lg-12 divstyle s">
              <img src={img12} width="40px" height="40px" /><span className="spanstyle">{t('win')}</span>
            </div>

          </div>
          <div className="col-lg-3 col-md-6 col-6" style={{"padding-left": "0px","padding-right": "0px"}}>
            <div className="col-lg-12 divstyle s">
              <img src={img13} width="40px" height="40px" /><span className="spanstyle">{t('featuredSellers')}</span>
            </div>

          </div>
        </div>
      </div>
    </div>



    <div class="row d-md-block d-sm-block d-block d-lg-none" style={{"margin-top": "20px"}}>
      <div class="col-md-12 col-sm-12 divstyle" >
        <div class="row">
          <div class="col-md-3 col-sm-3 col-6">
            <div class="card bordernone shadoww">
              <img class="card-img-top img-fluid" src={img14} alt="Card image" />
              <div class="card-body">
                <p class="card-title">Official Stores</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-6">
            <div class="card bordernone shadoww">
              <img class="card-img-top img-fluid" src={img15} alt="Card image" />
              <div class="card-body">
                <p class="card-title">Jumia Global</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-6">
            <div class="card bordernone shadoww">
              <img class="card-img-top " src={img16} alt="Card image" width="50%" />
              <div class="card-body">
                <p class="card-title">Shake $ Win</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-6">
            <div class="card bordernone shadoww">
              <img class="card-img-top " src={img17} alt="Card image" width="50%" />
              <div class="card-body">
                <p class="card-title">Orange Points</p>
              </div>
            </div>
          </div>

        </div>
        <div class="row d-none" >
          <div class="col-md-3 col-sm-3 col-3">
            <div class="card bordernone shadoww">
              <img class="card-img-top" src={img18} alt="Card image" width="50%" />
              <div class="card-body">
                <p class="card-title">Call To Buy</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-3">
            <div class="card bordernone shadoww">
              <img class="card-img-top" src={img19} alt="Card image"
                width="100%" />
              <div class="card-body">
                <p class="card-title">Jumia Primo</p>

              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-3">
            <div class="card bordernone shadoww">
              <img class="card-img-top" src={img20} alt="Card image" width="100%" />
              <div class="card-body">
                <p class="card-title">Jumia Rewards</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-3">
            <div class="card bordernone shadoww">
              <img class="card-img-top img-fluid" src={img21} alt="Card image" width="100%" />
              <div class="card-body">
                <p class="card-title small">Featured Sellers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style={{"margin-top": "20px",}}>
    <div class="col-lg-12 col-md-12 col-sm-12 divstyle">
    <h3 style={{"margin-top": "10px"}}>{t('Toprated')}</h3><br/>
    <div className="row">
    {products ? (Object.values(products).map((product, index) =>
     <Product key={product._id} product={product}/>            
              )) : (<h2>Not Found</h2>)}
    </div>
    </div>
    </div>

    <div className="row" style={{ "margin-top": "40px" }}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 divstyle ">
            <h5 style={{ "margin-top": "10px" }}>{t("Eyouneed")}</h5>
            <div className="row" >
              <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="card bordernone shadoww" >
                  <img className="card-img-top" src={img22} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t("Echr")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="card bordernone shadoww" onclick="product()">
                  <img className="card-img-top" src={img23} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t("Eoutfits")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="card bordernone shadoww" onclick="product()">
                  <img className="card-img-top" src={img24} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t("Egather")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="card bordernone shadoww" onclick="product()">
                  <img className="card-img-top" src={img25} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t("Ekids")}</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="card bordernone shadoww" onclick="product()">
                  <img className="card-img-top" src={img26} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t("Ehim")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="card bordernone shadoww" onclick="product()">
                  <img className="card-img-top" src={img27} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t("Eher")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" >
              <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="card bordernone shadoww" onclick="product()">
                  <img className="card-img-top" src={img28} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t("Ewinter")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="card bordernone shadoww" onclick="product()">
                  <img className="card-img-top" src={img29} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t("Ehappy")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="card bordernone shadoww" onclick="product()">
                  <img className="card-img-top" src={img30} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t('Esafe')}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="card bordernone shadoww" onclick="product()">
                  <img className="card-img-top" src={img31} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t("Econnect")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-sm-none d-none d-md-none d-lg-block">
                <div className="card bordernone shadoww" onclick="product()">
                  <img className="card-img-top" src={img32} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t("suber")}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-sm-none d-none d-md-none d-lg-block">
                <div className="card bordernone shadoww" onclick="product()">
                  <img className="card-img-top" src={img33} alt="Card image" width="192px;" height="106px;" />
                  <div className="card-body">
                    <p className="card-title">{t("Ekit")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        


    <div className="row" style={{"margin-top": "20px"}}>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="row divgray">
          <div className="col-lg-10 col-md-10 col-sm-10 col-9">
            <div style={{"margin-top": "8px"}}>
              <span className="small font-weight-bold">{t('DEALSOFTHEDAY')} </span><span className="small font-weight-bold" >|
                {t('Newdealseveryday')}</span>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-3">
            <div className="seeall" >
                <Link to="/category" className="aa"><span className="small font-weight-bold">{t("SEEALL")} </span><i className="fas fa-angle-right" style={{"font-size": "15px"}}></i></Link>
            </div>
          </div>
        </div>
        <div className="row divstyle">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 " style={{"margin-top":"5px","margin-bottom": "10px"}}>
          {prod ? (prod.map((produc, index) =>
            <Product key={produc._id} product={produc}/>
           )) : (<h2>Loading</h2>)}
        
           
            
          </div>
        </div>
        <div className="row divstyle" style={{"margin-top": "20px"}}>
      <div className="col-lg-6 col-md-6 col-sm-6 col-6 scaleonly" style={{"margin-top": "13px"}}>
        <img src={img34} width="100%"/>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-6 scaleonly" style={{"margin-top": "13px"}}>
        <img src={img35} width="100%"/>
      </div>

    </div>
    {/* <div className="row" style={{"margin-top":"20px"}}>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="row divgray">
        <div className="col-lg-10 col-md-10 col-sm-10 col-10">
            <div style={{"margin-top":"8px"}}>
              <span style={{"font-weight": "500","font-size": "22px"}}>MEN'S COATS & JACKETS </span><span style={{"font-size": "22px"}}>| Up to 50%
                OFF</span>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
            <div className="seeall">
              <a href="productPage.html" className="aa"><span>SEE ALL</span><i className="fas fa-angle-right" style={{"font-size": "15px"}}></i></a>
            </div>
          </div>
          </div>
          <div className="row divstyle">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 " style={{"margin-top":"5px","margin-bottom": "10px"}}>
         


          <div className="col-lg-2 col-md-6 col-sm-6 col-6 shadoww" style={{"float": "left"}} onclick="item()">
              <div className="card bordernone marg">
                <img className="card-img-top" src="homeimages/1 (17).jpg" alt="Card image" style={{"width":"100%"}}/>
                <div className="card-body cardbody">
                  <span className="card-title">Snooze Flat Fleece - Beige</span><br/>
                  <span className="aftprice">EGP 99 - EGP 189</span><br/>
                  <span className="befprice">EGP 149 - EGP 229</span>
                </div>
              </div>
            </div>


         
         </div>
         </div>
          </div>
        </div> */}



      </div>
    </div>

    <div dir="auto" style={{textAlign: 'start'}} className="row" style={{"margin-top": "20px"}}>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12 divstyle" style={{"padding-bottom": "20px"}}>
        <p className="lastp">{t("Et1")}</p>
        <span className="lastspan">{t("Et2")} </span>
        <p className="lastp">{t("Et3")}</p>
        <span className="lastspan">{t("Et4")}</span>
        <p className="lastp">{t("Et5")}</p>
        <p className="lastsmallp">{t("Et6")}</p>
        <span className="lastspan">{t("Et7")}</span><br/><br/>
        <span className="lastspan">{t("Et8")}</span>
        <p className="lastsmallp">{t("Et9")}</p>
        <span className="lastspan">{t("Et10")} </span><br/><br/>
        <span className="lastspan">{t("Et11")}</span>
        <p className="lastp">{t("Et12")}</p>
        <span className="lastspan">{t("Et13")}</span><br/><br/>
        <span className="lastspan">{t("Et14")}</span><br/>

      </div>
    </div>
      </Container>
    </>
  );
}

export default Home;