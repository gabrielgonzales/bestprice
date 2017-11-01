import React from "react";
import { render } from "react-dom";

import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
require('./app.scss');

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>

        );
    }
}

render(<App />, document.getElementById("app"));