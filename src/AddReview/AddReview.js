import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import axios from 'axios';
import "../home/Home.css";
import Review from '../Review/Review';
import {useTranslation} from 'react-i18next'



const AddReview = (props) => {
  const {t , i18n} = useTranslation();

    // console.log(props.location.data.product.name);
    let routeState

    routeState = localStorage.getItem('routeState')
    if (routeState) routeState = JSON.parse(routeState)

    let customerdet
    customerdet = localStorage.getItem('userInfo')
console.log(customerdet)

    if (customerdet) customerdet = JSON.parse(customerdet)

    const [ReviewForm, setReviewForm] = useState({
        Rate: "",
        Review: "",
    });

    const [formErrors, setFormErros] = useState({
        RateErrors: null,
        ReviewErros: null,
    });
    const handleRate=( { rating })=> {   
        console.log(rating);
        ReviewForm.Rate=rating;
    }  
    const handleFormChange = (e) => {
        console.log(e.target.value, e.target.name)
        setReviewForm({
            Rate: e.target.name === 'Rate' ? e.target.value : ReviewForm.Rate,
            Review: e.target.name === 'Review' ? e.target.value : ReviewForm.Review,
        });
       
        setFormErros({
            RateErrors: e.target.name === 'Rate' ? (e.target.value.length === 0) ?"this field is required":null: formErrors.RateErrors,
            ReviewErros: e.target.name === 'Review' ? (e.target.value.length === 0) ? "this filed is required"  : null : formErrors.ReviewErros,
        });
    };
    const handleFormSubmit = () => {
        console.log(ReviewForm);
        const { Rate, Review } = ReviewForm;
        setFormErros({
            RateErrors: Rate.length > 0 ? null : "This field is required",
            ReviewErros: Review.length > 0 ? null : "This field is required",
        });
        console.log(customerdet._id)
        console.log(ReviewForm.Rate)
        console.log(routeState.product._id)
        console.log(ReviewForm.Review)


        if(formErrors.RateErrors===null && formErrors.ReviewErros===null){
            // props.history.push("/todo");
            axios.post('https://jumia-mearn.herokuapp.com/api/reviews',{
                rate    : ReviewForm.Rate,
                customerId : customerdet._id,
                itemId    : routeState.product._id,
                textReview : ReviewForm.Review,
              }
        )
            .then(function (response) {
                console.log(response);
                props.history.push(`/productDetails/${routeState.product._id}`);

            })
            
            .catch(function (error) {
                console.log(error);
                // setErr("Missing Name of Book");
            });

    }
    else{
    }
    };
    console.log(customerdet._id)
    console.log(routeState);


    return (

        <>

            <Container dir="auto" style={{textAlign: 'start'}}>
                <br /><br />

                <div class="row" style={{ "margin-top": "20px", "height": "390px" }}>
                    <div class="col-lg-12 col-md-12 col-sm-12 divstyle">
                        <h3 style={{ "margin-top": "10px" }}>{t("Eaddrate")}</h3><hr />                
{/* <Rater style={{fontSize: '35px'}} interactive={true} total={5} onRate={handleRate} /> */}
                <br />
                <input
                    onChange={handleFormChange}
                    placeholder={t("Ewrite")}
                    name="Review"
                    className={`form-control mt-4 mb-4 ${formErrors.ReviewErros ? "border-danger" : ""
                        }`}
                    value={ReviewForm.Review}
                />
                <small className="text-danger"> {formErrors.ReviewErros}</small>
               
                <Rater style={{fontSize: '35px'}} interactive={true} total={5} onRate={handleRate} />
                <br/><br/>
                <button className="d-block btn btn-info"
                 onClick={handleFormSubmit}
                 >
                    {t("Esubmit")}
      </button>

                    </div>
                </div>





                <br /><br /><br /><br /><br />
            </Container>
        </>
    );
}

export default AddReview;