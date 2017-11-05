import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import * as firebase from 'firebase';

import Contact from "./contact/contact.jsx";
import Footer from "./footer/footer.jsx";
import Header from "./header/header.jsx";
import Home from "./home/home.jsx";
import Lista from "./lista/lista.jsx";
import Navigation from "./navigation/navigation.jsx";
import Product from "./product/product.jsx";
require('./app.scss');

// Initialize Firebase
var app = firebase.initializeApp({
    apiKey: "AIzaSyAgBEEH21H3dkdq500YZ9La66NvPrWAZ1k",
    authDomain: "bestprice-23975.firebaseapp.com",
    databaseURL: "https://bestprice-23975.firebaseio.com",
    projectId: "bestprice-23975",
    storageBucket: "bestprice-23975.appspot.com",
    messagingSenderId: "603808312921"
});

render(
    <BrowserRouter basename="/">
        <div id="wrapper">
            <Header />
            <Navigation />
            <main>
                <Route exact path={"/"} component={Home} />
                <Route path={"/lista"} component={Lista} />
                <Route path={"/product"} component={Product} />
                <Route path={"/contact"} component={Contact} />
            </main>
            <Footer />
        </div>
    </BrowserRouter>,
    document.getElementById("app"));

