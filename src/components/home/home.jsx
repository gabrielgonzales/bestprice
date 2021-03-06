import React from 'react';
import styles from './home.scss';
const logo = require("../images/logo.png");

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <div className="home_banner">
                    <img src={logo} alt="Logo" />
                    <h2>BESTPRICE</h2>
                    <p>Juntando os melhores estabelecimentos</p>
                    <p>Analisando os melhores preços</p>
                    <p>Sugerindo aquilo que precisa</p>
                </div>
            </div>
        );
    }
}
export default Home;