import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import * as firebase from 'firebase';

import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
import Home from "./home/home.jsx";
import Navigation from "./navigation/navigation.jsx";
import Lista from "./lista/lista.jsx";
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
            </main>
            <Footer />
        </div>
    </BrowserRouter>,
    document.getElementById("app"));

