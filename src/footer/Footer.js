import React from 'react';
import './Footer.css';
import logoImg from '../assets/images/logo.png';
import cartImg from '../assets/images/cartt.jpg';
import {useTranslation} from 'react-i18next'

 const Footer = (props) => {
    console.log(props);
    const {t , i18n} = useTranslation();
   
  
  
    const changeLanguage=(ln) =>{
        return ()=>{
            console.log(`language change to ${ln}`)
          i18n.changeLanguage(ln)
  
        }
     
  
    }
  return (
      
     <>
         
    <footer dir="auto" style={{textAlign: 'start'}} className="row bg-dark footerLarge">
        <div className="col-12">
            
            <div className="row p-3 mb-5" style={{"background-color":"#282828"}}>
                <div className="col-lg-2 pl-5 pr-5">
                    <img src={logoImg} width={"160px"}/>

                </div>
                <div className="col-lg-6 pl-5 pr-5">
                    <p dir="auto" className="text-white font-weight-bold">{t('NewtoJumia')}<br/> <span
                            className="text-white-50  font-weight-lighter small">{t('subscribe')}</span></p>

                    <div className="input-group sm-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white"><i
                                    className="fas fa-envelope text-secondary"></i></span>
                        </div>
                        <input type="email" className=" form-control bg-white text-secondary" name="userEmail" required
                            placeholder="Enter E-mail Address"/>
                        <a href="#" className="btn btn-dark ml-2 text-uppercase  btn-outline-light bordColor"
                            role="button">{t('mmale')}</a>
                        <a href="#" className="btn btn-dark ml-2 text-uppercase  btn-outline-light bordColor"
                            role="button">{t('fmale')}</a>

                    </div>

                </div>
                <div className="col-lg-4 pl-5">
                    <div className="row mb-2">
                        <div className="col-lg-3">
                            <img className="rounded" src={cartImg} width={"60px"} />

                        </div>
                        <div className="col-lg-9">
                            <p className="text-white font-weight-bold small"> {t('download')}
                                <br/> <span  className="text-white-50  font-weight-lighter ">{t('getaccess')}</span>
                            </p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <a href="#" className="btn btn-dark    btn-outline-light bordColor mr-2" role="button"><i
                                    className="fab fa-apple pr-1"></i>App Store</a>
                            <a href="#" className="btn btn-dark    btn-outline-light bordColor" role="button"><i
                                    className="fab fa-google-play pr-1 "></i>Google Play</a>

                        </div>
                    </div>


                </div>

            </div>
            
            <div className="row p-3 border border-top-0 border-right-0 border border-left-0  border-secondary">

                <div className="col-lg-3 pl-5 ">
                    <div className="row pb-2 mb-2">
                        <div className="col-lg-12">
                            <h1 className="text-white font-weight-bold small">{t('lETUS')}</h1>
                            <ul className="list-unstyled">
                                <li><a className="text-white-50  small" href="#">{t('helpMe')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('contactUs')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('howtobuyonJumia')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('HowtopayonJumia')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('deliverytimelines')}</a></li>
                                <li><a className="text-white-50 small" href="#">{t('returnPolicy')} </a></li>
                                <li><a className="text-white-50  small" href="#">{t('corporateServices')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('reportaProduct')}</a></li>
                            </ul>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-white font-weight-bold small pb-2">{t('jOINUSON')}</h1>
                            <a href="#" className="btn text-white" role="button"><i
                                    className="fab fa-facebook-f  socialIcon "></i></a>
                            <a href="#" className="btn text-white" role="button"><i
                                    className="fab fa-twitter  socialIcon"></i></a>
                            <a href="#" className="btn text-white" role="button"><i
                                    className="fab fa-instagram socialIcon"></i></a>
                            <a href="#" className="btn text-white" role="button"><i
                                    className="fab fa-youtube socialIcon"></i></a>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row pb-2 mb-4 ">
                        <div className="col-lg-12">
                            <h1 className="text-white font-weight-bold small">{t('aBOUTJUMIAEGYPT')}</h1>
                            <ul className="list-unstyled">
                                <li><a className="text-white-50  small" href="#">{t('aboutus')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('jumiaCareers')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('termsandConditions')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('privacyPolicy')}</a></li>
                                <li><a className="text-white-50  small" href="#">Jumia Express</a></li>
                                <li><a className="text-white-50  small" href="#">Jumia Mall </a></li>
                                <li><a className="text-white-50  small" href="#">{t('jumiaLogisticsServices')}</a></li>

                            </ul>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-white font-weight-bold small pb-2">{t('nPAYMENTMETHODS')}</h1>
                            <a href="#" className="btn text-white" role="button"><i
                                    className="fas fa-hand-holding socialIcon "></i></a>
                            <a href="#" className="btn text-white" role="button"><i
                                    className="fab fa-cc-mastercard  socialIcon "></i></a>
                            <a href="#" className="btn text-white" role="button"><i
                                    className="fab fa-cc-visa  socialIcon "></i></a>
                            <a href="#" className="btn text-white" role="button"><i
                                    className="fas fa-money-bill-wave socialIcon"></i></a>


                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row pb-2 mb-4 ">
                        <div className="col-lg-12">
                            <h1 className="text-white font-weight-bold small">{t('nMAKEMONEYWITHJUMIA')}</h1>
                            <ul className="list-unstyled ">
                                <li><a className="text-white-50  small" href="#">{t('sell')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('nBecomeaLogistics')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('nBecomeaSalesConsultant')}(J-Force )</a>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-white font-weight-bold small">{t('nJUMIAINTERNATIONAL')}</h1>

                        </div>
                    </div>
                    <div className="row pb-2 mb-4 ">
                        <div className="col-lg-4">
                            <ul class="list-unstyled ">
                                <li><a className="text-white-50 small" href="#">{t('nAlgeria')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('nIvoryCoast')} </a></li>
                                <li><a className="text-white-50  small" href="#">{t('nGhana')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('nKenya')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('nMorocco')}</a></li>

                            </ul>

                        </div>
                        <div className="col-lg-8">

                            <ul className="list-unstyled ">
                                <li><a className="text-white-50  small" href="#">{t('nNigeria')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('nSenegal')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('nTunisia')}</a></li>
                                <li><a className="text-white-50  small" href="#">{t('nUganda')}</a></li>
                            </ul>

                        </div>

                    </div>
                </div>

            </div>
            

            <div className="row">
                <div className="col-lg-12 p-3">
                    <div className=" text-center ">
                        <a href="#" className="text-white pr-3 main "><span className="reword"><i
                                    className="far fa-star"></i>REWOAROS</span></a>
                        <a href="#" className="text-white main"><span className="pay"><i
                                    className="fas fa-shield-alt"></i>PAY</span></a>
                    </div>
                </div>
               

            </div>


        </div>
    </footer>
    {/*footer2*/ }
    <footer className="row bg-dark mt-5 pl-3 pr-3  footerSmallDevices">
        <div className="col-12">
            {/*row1*/ } 
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <a href="#" className="btn btn-outline-none text-white " role="button">
                            <i className="fas fa-chevron-up"></i>
                            <p>{t('nBACKTOTOP')}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row p-3 text-center">
                <div class="col-6">
                    <span  class="text-center pl-3 ">
                        <i className="fas fa-flag-usa text-white"></i>
                        <a className="text-white pl-2"onClick={changeLanguage('en') } role="button"  ><span
                        className="b"> English</span></a>
                        
                    </span>
                    </div>
                    <div class="col-6">
                    <span  class="text-center pr-3 ">
                    <i class="fas fa-flag" style={{color:"red"}}></i>
                        
                        <a class="text-white pl-2"onClick={changeLanguage('ar') } role="button"  ><span
                        className="b">عربى</span></a>
                        
                    </span>
                    </div>
                </div>   
            {/*row2*/ } 
            <div className="row pl-5 p-3 border border-top-0 border-right-0  border-left-0  border-secondary"
                style={{"background-color": "#282828"}}>
                <div className="col-md-2 col-sm-4  col-4  text-center p-2">
                    <a className="text-white text-uppercase text-decoration-none small" href="#">{t('helpMe')}</a>

                </div>
                <div className="col-md-2 col-sm-4  col-4   text-center p-2">
                    <a className="text-white text-uppercase text-decoration-none small" href="#">{t('contactUs')}</a>

                </div>
                <div className="col-md-3 col-sm-4  col-4   text-center p-2">
                    <a className="text-white text-uppercase text-decoration-none small" href="#">{t('nTermsConditions')}</a>

                </div>
                <div className="col-md-2 col-sm-6  col-6   text-center p-2">
                    <a className="text-white text-uppercase text-decoration-none small" href="#">{t('sell')}</a>

                </div>
                <div className="col-md-3 col-sm-6 col-6   text-center p-2">
                    <a className="text-white text-uppercase text-decoration-none small" href="#">{t('reportaProduct')}</a>

                </div>

            </div>
            <div className="row" style={{"background-color": "#282828"}}>
                <div className="col-md-12 col-sm-12 col-12 text-center p-3">
                    <span className="text-capitalize text-white-50 ">{t('nallrightreserved')}</span>

                </div>

            </div>




        </div>
    </footer>



      
    </>
  );
}

export default Footer;