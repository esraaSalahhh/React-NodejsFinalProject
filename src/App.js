import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Routes from "./Routes";
//import  './i18n';
import i18n from './i18n';



function App(props) {
  let lang = props.lng;
  return (
   <>
   <Router>
   
   <Header/>
   <Routes />
   <Footer/>
  
   </Router>
   </>
  );
}

export default App;
