import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'

import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
import Home from "./home/home.jsx";
import Navigation from "./navigation/navigation.jsx";
import Lista from "./lista/lista.jsx";
import Product from "./product/product.jsx";
require('./app.scss');

render(
    <BrowserRouter>
        <div id="wrapper">
            <Header />
            <Navigation />
            <main>
                <Route exact path={"/"}component={Home} />
                <Route path={"/lista"} component={Lista} />
                <Route path={"/product"} component={Product} />
            </main>
            <Footer />
        </div>
    </BrowserRouter>,
    document.getElementById("app"));