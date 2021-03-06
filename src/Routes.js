import React, { Suspense } from "react";

/*import About from './pages/About';
import ToDoList from './pages/ToDoList';
import Books from './pages/Books';*/

import { Route, Switch } from "react-router-dom";


const Home = React.lazy(() => import("./home/Home"));
const HomeCategory = React.lazy(() => import("./categoryHome/HomeCategory"));
const Login = React.lazy(() => import("./login/Login"));
const Cart = React.lazy(() => import("./cart/Cart"));
const Register = React.lazy(() => import("./register/Register"));
const ShippingAddress = React.lazy(() => import("./CheckoutSteps/ShippingAddress"));
const PaymentMethod = React.lazy(() => import("./CheckoutSteps/PaymentMethod"));
const PlaceOrder = React.lazy(() => import("./CheckoutSteps/PlaceOrder"));
const Order = React.lazy(() => import("./CheckoutSteps/Order"));
const OrderHistory = React.lazy(() => import("./CheckoutSteps/OrderHistory"));
const ProductDetails = React.lazy(() => import("./ProductDetailss/ProductDetailss"));
const AllReview = React.lazy(() => import("./AllReview/AllReview"));
const AddReview = React.lazy(() => import("./AddReview/AddReview"));
const SearchScreen = React.lazy(() => import("./search/SearchScreen"));
const Searchpage = React.lazy(() => import("./SearchPage/SearchPage"));







export default function Routes() {
    return (
      <Suspense fallback="loading">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category" exact component={HomeCategory} />
          <Route path="/login" exact component={Login} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/cart/:id" exact component={Cart} />
          <Route path="/register" exact component={Register} />
          <Route path="/shipping" exact component={ShippingAddress} />
          <Route path="/payment" exact component={PaymentMethod} />
          <Route path="/placeorder" exact component={PlaceOrder} />
          <Route path="/order/:id" exact component={Order} />
          <Route path="/orderhistory" exact component={OrderHistory} />
          <Route path="/productDetails/:id" exact component={ProductDetails} />
          <Route path="/allreview/:id" exact component={AllReview} />
          <Route path="/addreview" exact component={AddReview} />
          <Route path="/search/name/:name?" exact component={SearchScreen} />
          <Route path="/searchpage" exact component={Searchpage} />

        </Switch>
      </Suspense>
    );
  }