import React from 'react';
import './Register.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { register } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'



const Register = (props) => {
  const { t, i18n } = useTranslation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');


  const redirect = props.location.search? props.location.search.split('=')[1]:'/';
  const userRegister =useSelector (state => state.userRegister);
  const {userInfo} =userRegister ;
  

  const [formErrors, setFormErros] = useState({
    firstNameErrors: null,
    lastNameErros: null,
    emailErrors: null,
    passwordErros: null,
    phoneErros: null,
  });
  //   const [formErrors, setFormErros] = useState({
  //   firstNameErrors: null,
  //   lastNameErros: null,
  //   emailErrors: null,
  //   passwordErros: null,
  //   phoneErros: null,
  // });
const dispatch = useDispatch();
const handleFormSubmit = (e) => {
  e.preventDefault();
  dispatch(register(firstName,lastName,email, password,phone));
  setFormErros({
      firstNameErrors: firstName.length > 0 ? null : "required field",
      lastNameErros: lastName.length > 0 ? null : "required field",
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
const onChangeFirstName = (e) => {
  let str = /^[a-zA-Z]+$/ ;
  const firstName = e.target.value;
 // console.log(e.target.name);
 setFirstName(firstName);
  setFormErros({
    ...formErrors,
    firstNameErrors :e.target.value.length === 0 ? " required field" :
    e.target.value.length < 3 ?" first name needs to be 3 or more":
    (!str.test(e.target.value) )?"first name must be string"

     : null
    
  })
     
  
};



const onChangeLastName = (e) => {
  let str2 = /^[a-zA-Z]+$/ ;
  const lastName = e.target.value;
 setLastName(lastName);
  setFormErros({
    ...formErrors,
     lastNameErros :e.target.value.length === 0 ? " required field" :
          e.target.value.length < 3 ?"last name needs to be 3 or more":
         (!str2.test( e.target.value) )?"last name must be string"
           : null
    })
    console.log(e.target.value.length);
    console.log(formErrors.lastNameErros);
};

const onChangeEmail = (e) => {
  let x = e.target.value.length;
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = e.target.value;
 // console.log(e.target.name);
  setEmail(email);
  setFormErros({
    ...formErrors,
    emailErrors:  (x === 0) ? "required" :
     (!re.test(e.target.value)) ? "that not email format " :
      null 
      
  });
  console.log(formErrors.emailErrors);
  console.log(formErrors);
};

  const onChangePassword = (e) => {
      let y = e.target.value.length;
      const password = e.target.value;
      setPassword(password);
      setFormErros({
        ...formErrors,
        passwordErros: (y === 0) ? "required" :
         (y < 6) ? "Password length not less than 8 characters" : 
         null 
      });
  };

  const onChangePhone = (e) => {
    let testPhone = /^((010)|(011)|(012))[0-9]{8}$/ ;
    const phone = e.target.value;
   // console.log(e.target.name);
   setPhone(phone);
    setFormErros({
      ...formErrors,
      phoneErros : (!testPhone.test(phone) )?"is not a valid phone number! "
      : null
      })
  };

  const backLogin =( ) =>{
    props.history.push("/login")
  }
  
  return (

    <>
      <div className="container bodyContainerRegister" dir="auto" style={{ textAlign: 'start' }}>

        <h4 className="mb-3" style={{ color: "#f68b1e" }}>{t("Eaccou")}</h4>

        <form action="" onSubmit={handleFormSubmit}>
          <div className="row mb-4">
            <div className="col-11 col-sm-6 col-md-6 col-lg-6">
              <input type="text" onChange={onChangeFirstName} autoComplete="off"
                className={`form-control formInput ${
                  formErrors.firstNameErrors ? "border-danger" : ""
                }`}
                value={firstName}
               id="firstName" placeholder={t("Efirst")} name="firstName"
                 />
               <p className="text-danger"> {formErrors.firstNameErrors}</p>
            </div>
            <div class="col-11 col-sm-6 col-md-6 col-lg-6">
              <input type="text" onChange={onChangeLastName} autoComplete="off"
              className={`form-control formInput ${
                formErrors.lastNameErros ? "border-danger" : ""
              }`}
              value={lastName} 
               id="lastName" placeholder={t("Elast")} name="lastName"
                 />
                <p className="text-danger"> {formErrors.lastNameErros}</p>
            </div>

          </div>
          <div className="row mb-4">
            <div className="col-11 col-sm-6 col-md-6 col-lg-6">
              <input type="email" onChange={onChangeEmail} autoComplete="off"
               value={email}
               className={`form-control formInput ${
                formErrors.emailErrors ? "border-danger" : ""}`}  id="email" placeholder={t("Eem")}
                 name="email"  />
                 <p className="text-danger">{formErrors.emailErrors} </p>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-6">
              <input type="password" onChange={onChangePassword}
               value={password}
               className={`form-control formInput ${
                formErrors.passwordErros ? "border-danger" : ""}`}  placeholder={t("Epass")}
                 name="password"  />
                 <p className="text-danger">{formErrors.passwordErros} </p>
            </div>

          </div>
          <p>Prefix</p>
          <div className="row mb-4">
            <div className="col-lg-1 col-1">
              <span>+20</span>
            </div>
            <div className="col-lg-5 col-10">
              <input type="text"
              onChange={onChangePhone} autoComplete="off" className={`form-control formInput ${
                formErrors.phoneErros ? "border-danger" : ""}`}  id="phone" 
                placeholder={t("Ephone")} name="phone" />
                <p className="text-danger">{formErrors.phoneErros} </p>
            </div>

          </div>
          <div className="form-group form-check">
            <label className="containerCheck" style={{ "display": "inline-block", "margin": "0px", "font-size": "14px", "padding-left": "28px", "left": "-15px" }}>{t("Ewant")}
                            <input type="checkbox" name="remember" />

              <span className="checkmark"><div id="checkHover" style={{ "display": "none", "width": "35px", "height": "35px", "border-radius": "50%", "position": "absolute", "background-color": "#f68a1e2d", "top": "-10px", "left": "-11px" }}></div></span>
            </label>
          </div>

          <div className="col-12 formLogin"><button type="submit" 
           id="submit" className="btn  btn-block H48 lgnBtn" > <span className="btnLogo"></span><span className="loginBtnTxt">{t("Ecacc")}</span></button></div>
          {/* <div className="col-12 formFB"><button type="button" className="btn  btn-block H48 fbBtn"><span className="btnLogo"><i className="fab fa-facebook-square"></i></span><span className="loginFBBtnTxt">{t("Erig")}</span></button></div> */}
          <div className="text-center">
          <p className="text-center mt-5">{t("Ealreadyhave")}</p>
          <Link to={`/login?redirect=${redirect}`}   style={{ color: "#f68b1e" }} className="text-decoration-none text-center ">{t("Elog")}</Link>
          </div>


        </form>
      </div>



    </>
  );
}

export default Register;