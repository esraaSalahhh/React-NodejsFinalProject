import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import { useTranslation } from 'react-i18next'



const Login = (props) => {
    const { t, i18n } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const redirect = props.location.search? props.location.search.split('=')[1]:'/';
    const userLogin =useSelector (state => state.userLogin);
    const {userInfo} =userLogin ;
    

    const [formErrors, setFormErros] = useState({
        emailErrors: null,
        passwordErros: null,
    });

const dispatch = useDispatch();
const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
    console.log(email.length);
    setFormErros({
        emailErrors: email.length > 0 ? null : "required",
        passwordErros: password.length > 0 ? null : "required",
    });
    console.log(formErrors);
};

useEffect(() =>{
    if(userInfo){
        props.history.push(redirect)
    }
}, [props.history,redirect,userInfo])

const onChangeEmail = (e) => {
    let x = e.target.value.length;
    let re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    const email = e.target.value;
   // console.log(e.target.name);
    setEmail(email);
    setFormErros({
        emailErrors: e.target.name === 'Email' ? (x === 0) ? "required" : (!re.test(e.target.value)) ? "that not email format " : null : formErrors.emailErrors,
        
    });
    console.log(formErrors.EmailErrors);
    console.log(formErrors.emailErrors);
  };

    const handleFormChange = (e) => {
        let x = e.target.value.length;
        const password = e.target.value;
        setPassword(password);
        setFormErros({
           
            passwordErros: e.target.name === 'Password' ? (x === 0) ? "required" : (x < 6) ? "Password length not less than 6 characters" : null : password.passwordErros,
        });
    };

   // console.log(props);
    return (

        <>
            <div className="container bodyContainer" dir="auto" style={{ textAlign: 'start' }}>
                <div className="row toggler">
                    <div className="col-6 log-regToggler logToggle" id="logToggle" ><span class="setMargin">{t("Elogin")}</span></div>
                    <div className="col-6 log-regToggler regToggle" id="regToggle" ><Link style={{margin:"10px", color:"coral"}} to={`/register?redirect=${redirect}`}  className="registerEmail"><span  class="setMargin">Create an account</span></Link></div>
                   
                </div>
                <div className="row frm ">
                    <div className="col-md-6 devider loginSection logsec" id="logsec" style={{ "background-color": "#78787800" }}>
                        <form onSubmit={handleFormSubmit} action="" className="needs-validation" id="needs-validation" novalidate>
                            <div  className="col-12 formTitle"><span>{t("Elogin")}</span></div>
                            <div className="col-12 formm">

                                <div className="form-group" style={{ "height": "60px" }}>
                                    <label className="movingLable" id="mail" for="maill" style={{ "color": "rgb(133, 133, 133)" }}>{t("Eemail")}:</label>
                                    <input value={email}
                                       onChange={onChangeEmail} id="maill"  type="email" 
                                       className={`formInput form-control mt-4 ${formErrors.emailErrors ? "border-danger" : ""
                                        }`} id="uname" name="Email"  />
                                    <small className="text-danger"> {formErrors.emailErrors}</small>
                                    <div className="valid-feedback" style={{ "visibility": "hidden" }}>Valid.</div>
                                    <div className="invalid-feedback" id="mailFailPlaceholder" style={{ "display": "block", "visibility": "hidden" }}>Required field</div>
                                    <div className="invalid-feedback" id="mailFail">Required field</div>
                                </div>


                                <div className="form-group">
                                    <label className="movingLable" id="pass" for="passs" style={{ "color": "rgb(133, 133, 133)" }}>{t("Epass")}:</label>
                                    <input value={password} onChange={handleFormChange}  id="passs" type="password"  className={`formInput form-control mt-4 mb-4 ${formErrors.passwordErros ? "border-danger" : ""
                                        }`} id="pwd" name="Password"  />
                                    <small className="text-danger"> {formErrors.passwordErros}</small>
                                    <div className="valid-feedback" style={{ "visibility": "hidden" }}>Valid.</div>
                                    <div className="invalid-feedback" id="passFailPlaceholder" style={{ "display": "block", "visibility": "hidden" }}>Required field</div>
                                    <div className="invalid-feedback" id="passFail"  >Required field</div>
                                </div>

                                <div className="form-group form-check">
                                    <label className="containerCheck" style={{ "display": "inline-block", "margin": "0px", "font-size": "14px", "padding-left": "28px", "left": "-15px" }}>{t("Eremember")}
                            <input type="checkbox" name="remember" />

                                        <span className="checkmark"><div id="checkHover" style={{ "display": "none", "width": "35px", "height": "35px", "border-radius": "50%", "position": "absolute", "background-color": "#f68a1e2d", "top": "-10px", "left": "-11px" }}></div></span>
                                    </label>

                                    <span><a href="#" className="forgotPass"> {t("Eforget")}?</a></span>
                                </div>


                            </div>

                            <div className="col-12 formLogin">
                                <button type="submit" id="submit" className="btn  btn-block H48 lgnBtn"  >
                                    <span className="btnLogo"><i className="fas fa-envelope"></i></span>
                                    <span className="loginBtnTxt">{t("Elog")}</span>
                                </button></div>
                            {/* <br className="or" />
                            <div className="row or">
                                <div className="col-5" style={{ "padding": "0px" }}><hr /></div>
                                <div className="col-2" style={{ "display": "flex", "justify-content": "center", "padding": "0px" }}>{t("Eor")}</div>
                                <div className="col-5" style={{ "padding": "0px" }}><hr /></div>
                            </div>
                            <br /> */}
                            {/* <div className="col-12 formFB"><button  type="button" className="btn  btn-block H48 fbBtn"><span className="btnLogo"><i className="fab fa-facebook-square"></i></span><span className="loginFBBtnTxt">{t("Elogface")}</span></button></div> */}
                        </form>

                    </div>

                    <div className="col-md-6 loginSection regsec" id="regsec" style={{ "background-color": "#eb333300" }}>

                        <form action="" className="needs-validation" id="needs-validation" novalidate>
                            <div className="col-12 formTitle"><span>{t("Ecreate")}</span></div>
                            <span style={{ "display": "inline-block", "margin": "53px 10px 100px 16px" }}>{t("Exx")}</span>


                            <Link to={`/register?redirect=${redirect}`}  className="registerEmail"><div className="col-12 formLogin"><button type="button" className="btn  btn-block H48 lgnBtn" > <span className="btnLogo"><i className="fas fa-envelope"></i></span><span className="loginBtnTxt">{t("Ecema")}</span></button></div></Link>
                            {/* <br className="or" />
                            <div className="row or">
                                <div className="col-5" style={{ "padding": "0px" }}><hr /></div>
                                <div className="col-2" style={{ "display": "flex", "justify-content": "center", "padding": "0px" }}>{t("Eor")}</div>
                                <div className="col-5" style={{ "padding": "0px" }}><hr /></div>
                            </div>

                            <br /> */}
                            {/* <div className="col-12 formFB"><button  type="button" className="btn  btn-block H48 fbBtn"><span className="btnLogo"><i className="fab fa-facebook-square"></i></span><span className="loginFBBtnTxt">{t("Erig")}</span></button></div> */}
                        </form>

                    </div>


                </div>
            </div>


        </>
    );
}

export default Login;