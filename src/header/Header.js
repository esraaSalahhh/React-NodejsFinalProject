import React , {useState } from 'react';
import './Header.css';
import img1 from '../assets/homeimages/flag1.png';
import img2 from '../assets/homeimages/flag2.png';
import axios from 'axios';
import unnamed from '../assets/images/unnamed.png';
import download from '../assets/images/download.png';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { singnout } from '../actions/userActions';
import SearchBox from '../search/SearchBox';
import {useTranslation} from 'react-i18next'
import i18n from '../i18n';


 const Header = (props) => {
    console.log(props);
    const [Search, setSearch] = useState();
    
   const cart =useSelector (state => state.cart);
   const {cartItems} = cart;
   const userLogin =useSelector (state => state.userLogin);
   const {userInfo} =userLogin ;
   const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(singnout());
   
  };
  const {t , i18n} = useTranslation();
  const changeLanguage=(ln) =>{
      return ()=>{
          console.log(`language change to ${ln}`)
          localStorage.setItem('lang', ln);
        i18n.changeLanguage(localStorage.getItem('lang'))

      }
   

  }
  const handleFormChange = (e) => {
    console.log(e.target.value, e.target.name)
    setSearch(e.target.value);
};

const handleFormSubmit = () => {
    // console.log(Search);
    localStorage.setItem('SearchValue', Search);
   
};
  return (
      
      
     <>
     
    <nav dir="auto" style={{textAlign: 'start'}} className="navbar navbar-expand-sm navbar-light d-none d-lg-block" style={{"background-color":"#f5f5f5","height": "35px", "direction":"auto" , "textAlign":"start"}}>
        <ul className="navbar-nav">
            <li className="nav-item" style={{"margin-left": "75px;"}}>
                <a className="nav-link u" href="homePage.html" style={{"color": "darkorange","font-size": "12px","font-weight": "bold", "direction":"auto" , "textAlign":"start"}}><img
                     style={{ direction:"auto" }}   src={unnamed} width={"14px"}/>{t("sell")} </a>
            </li>
            <li className="nav-item" style={{"margin-left": "355px"}}>
                <a className="nav-link" href="#" style={{"color": "darkorange","font-size": "12px","font-weight": "bold"}}><i
                        className="fas fa-crown"></i> PRIMO</a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="#" style={{"color": "darkgray","font-size": "12px","font-weight": "bold"}}><span
                        className="o"><i className="far fa-star"></i> REWARDS</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" style={{"color": "darkgray","font-size": "12px","font-weight": "bold"}}><span
                        className="b"><i className="fas fa-shield-alt"></i> PAY</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={changeLanguage('en') } role="button"  style={{"color": "darkgray","font-size": "12px","font-weight": "bold"}}><span
                        className="b"><img src={img2} width="25px" /> English</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={changeLanguage('ar')} role="button" style={{"color": "darkgray","font-size": "12px","font-weight": "bold"}}><span
                      className="b"><img src={img1} width="18px" /> عربى</span></a>
            </li>
        </ul>
    </nav>

    <nav dir="auto" style={{textAlign: 'start'}} className="navbar navbar-expand-md navbar-light sticky-top"
        style={{"background-color":"white","height": "72px","box-shadow": "0 4px 4px -4px rgba(0,0,0,0.12)"}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand"  style={{"margin-left": "75px"}}><img src={download} width={"135px"}/></Link>
        
        {/* <i className="fas fa-search icon d-none d-xl-block" id="search"></i> */}
        {/* <Route render={({history}) => <SearchBox history={history}></SearchBox>} ></Route> */}
        
        <input  
         className="input-field d-none d-xl-block"
          type="text"
           placeholder={t("searchProduct")}
           onChange={handleFormChange}
           value={Search}
           />
        <Link to="/searchpage"role="button" class="btn d-none d-xl-block"
        onClick={handleFormSubmit}
            style={{"background-color": "darkorange","color":"white","font-size": "14px","font-weight": "600","box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)","margin-left": "10px"}}>{t("search")}</Link>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">

            <ul className="navbar-nav">
                <li className="nav-item dropdown" style={{"margin-left":"15px"}}>
                    {userInfo ? (
                        <div >
                        <Link to="#" className="text-decoration-none log o"  >Hi,{userInfo.firstName} <i className="fa fa-caret-down"></i>{''}
                        </Link>
                        <ul className="dropdown-content">
                        <li >
                            <Link to="/orderhistory"  className="text-decoration-none text-primary">Order History</Link>
                        </li>
                        <li >
                            <Link to="#signout" onClick={signoutHandler} className="text-decoration-none text-primary">Sign out</Link>
                        </li>
                        </ul>
                        
                        </div>
                    ):
                    (
                        <Link to="/login" className="nav-link" href="login.html"><span class=" log o"><i className="far fa-user"></i> Login <i
                        className="fas fa-angle-down"></i></span></Link>

                    )
                }
                   
                </li>
                <li className="nav-item" style={{"margin-left": "15px"}}>
                    <a className="nav-link" href="#"><span className=" log o"><i className="far fa-question-circle"></i> {t("help")} <i
                                className="fas fa-angle-down"></i></span></a>
                </li>
                <li className="nav-item" style={{"margin-left": "15px"}}>
                   <Link to="/cart" className="nav-link" ><span className=" log o"><i className="fas fa-shopping-cart"></i> {t("cart")}
                    {cartItems.length > 0 &&  (
                        <span className="badge">{cartItems.length}</span>
                    )}
                    </span></Link>
                </li>

            </ul>
        </div>
    </nav>

        
    </>
  );
}

export default Header;