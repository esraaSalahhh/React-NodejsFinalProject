import React, { useEffect, useState } from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import axios from 'axios';

const Review = (props) => {
    console.log(props);
    const { review} = props;
    const [userDet, setuserDet] = useState(null);
    useEffect(() => {
        axios.get(`https://jumia-mearn.herokuapp.com/api/user/${review.customerId}`)
        .then(function (response) {
          console.log(response.data);
          setuserDet(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }, []);

    return (

        <>
           

            <div key={review._id} >
                <div style={{ "color": "darkorange" }}>
                    <Rater style={{ fontSize: '35px' }} total={5} rating={review.rate} interactive={false} />
                </div>
                <br />
                <p style={{"fontWeight":"600"}}>{review.textReview} </p>
                {userDet ? (userDet.map((name, index) =>
                <div key={index}>
                  <p style={{"color":"darkorange","fontWeight":"bold"}}>by {name.firstName}</p>
                  </div>
                )) : (<h2>Loading</h2>)}
                
                <hr />
            </div>
        </>
    );
}

export default Review;