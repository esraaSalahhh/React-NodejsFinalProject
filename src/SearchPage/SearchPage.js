import React , { useEffect ,useState } from 'react';
import { Button, Container} from 'reactstrap';
import './SearchPage.css'; 
import axios from 'axios';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next'



  var Slaider = (props) =>{ 
  const {t , i18n} = useTranslation();
   const SearchVal=localStorage.getItem('SearchValue');
   var sortpri='c';
   console.log(SearchVal);
   const [producttt, setproducttt] = useState([]);
    const [Err, setErr] = useState([]);
    const [Price11, setPrice11] = useState(0);
    const [Price12, setPrice12] = useState(5000);
    const apply= () => {
        console.log("apply")
        axios.get(`https://jumia-mearn.herokuapp.com/search/category?filter=${Price11}-${Price12}&sort=${sortpri}&page=0&category=${SearchVal}`)
        .then(function (response) {
            console.log(response.data);
            setproducttt(response.data);
        })
        .catch(function (error) {
            console.log(error);
            setErr("Missing Name of Book");
        });
    }
    const sorthightolow = () => {
        console.log("lh");
        sortpri='a';
        axios.get(`https://jumia-mearn.herokuapp.com/search/category?filter=${Price11}-${Price12}&sort=a&page=0&category=${SearchVal}`)
        .then(function (response) {
            console.log(response.data);
            setproducttt(response.data);
        })
        .catch(function (error) {
            console.log(error);
            setErr("Missing Name of Book");
        });
    }
    const sortRate =() =>{
      console.log("ratehl");
      sortpri='c';
      axios.get(`https://jumia-mearn.herokuapp.com/search/category?filter=${Price11}-${Price12}&sort=c&page=0&category=${SearchVal}`)
      .then(function (response) {
          console.log(response.data);
          setproducttt(response.data);
      })
      .catch(function (error) {
          console.log(error);
          setErr("Missing Name of Book");
      });
    }
    const sortlowtohighe = () => {
        console.log("hl");
        sortpri='b';
        axios.get(`https://jumia-mearn.herokuapp.com/search/category?filter=${Price11}-${Price12}&sort=d&category=${SearchVal}`)
        .then(function (response) {
            console.log(response.data);
            setproducttt(response.data);
        })
        .catch(function (error) {
            console.log(error);
            setErr("Missing Name of Book");
        });
    }
    const price1 = (e) => {
        console.log(e.target.value, e.target.name)
        setPrice11(e.target.value);
    };
    const price2 = (e) => {
        console.log(e.target.value, e.target.name)
        setPrice12(e.target.value);
    };
    useEffect(() => {
     axios.get(`https://jumia-mearn.herokuapp.com/search/category?filter=0-5000&sort=c&page=0&category=${SearchVal}`)
        .then(function (response) {
            console.log(response.data);
            setproducttt(response.data);
        })
        .catch(function (error) {
            console.log(error);
            setErr("Missing Name of Book");
        });
}, []);
  return (
    <>
   <Container dir="auto" style={{textAlign: 'start'}}>
   <article  dir="auto" style={{textAlign: 'start'}}>
       <br/>
<section  className="row" dir="auto" style={{textAlign: 'start'}}>
<div className="col-sm-9">
<section className="container-fluid colorCont">
<nav className="navbar navbar-expand-sm bg-light navbar-dark sortBar">
        <div className="col-sm-9">
        <div className="card-body">

<form action="">
    <div class="row"> 
    <div class="col-7">
    <h6 className="card-title">{t("Epricee")} ({t("Eegp")})</h6> 
    </div>
    <div class="col-5">
    <p className="card-title" style={{"color":"darkorange"}} onClick={apply}>{t("Eapply")}</p> 
    </div>
    </div>
      <div className="input-group mb-3">
        <input type="number"
        onChange={price1}
         className="list-inline w-25" 
         value={Price11}
         
         />
        <span>-</span>
        <input type="number" 
        onChange={price2}
        className="w-50" 
        value={Price12}/>
      </div>
</form>
</div>
        </div>
          <div className="col-sm-3">
            <div className="dropdown">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                {t("Esbyy")}
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#" onClick={sorthightolow} >{t("Ehtol")}</a>
                <a className="dropdown-item" href="#" onClick={sortlowtohighe} >{t("Eltoh")}</a>
                <a className="dropdown-item" href="#" onClick={sortRate} >{t("EsortRate")}</a>

              </div>
            </div>
              </div>
</nav>

<div className="row mb-4 p-3">

{producttt ? (producttt.map((pr, index) =>
 
          <div key={index} className="col-lg-3 col-12 ">
            <div className="card  item">
                <img className="card-img-top" src={pr.image} alt="Card image" style={{"width":"100%",  "height":"208px"}}/>
                    <div className="card-body">
                    <p className="card-text">
                      {localStorage.getItem('lang') == 'en'?pr.name:pr.nameAR}
                    </p>
                    {/* <h6>{t("Eegp")} {pr.price-pr.price*pr.discount/100}</h6> */}
                    <p><h6 >{t("Eegp")} {pr.price}</h6>
                    <span className="badge badge-secondary">{pr.discount}%</span></p>
                    <div className="container">
                    <Rater style={{ fontSize: '20px' }} total={5} rating={pr.rating.toFixed(1)} interactive={false} />
                   <p> {pr.numReviews} {t("Erating")} </p>
                    </div>
                    <Link to={`/cart/${pr._id}`} class="text-decoration-none" className="btn btn-primary btn-block" style={{ "color": "white" }}>
                    {t('Eaddtocart')}
                    </Link>
                </div>
              
            </div>
        </div>
            )) : (<h2>Not Found</h2>)}

</div>

</section>
</div>

</section>
</article>
</Container>
   </> 
  );
 
};
export default Slaider


