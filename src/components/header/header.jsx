import React from 'react';
import styles from './header.scss';
import { Link } from 'react-router-dom';
const logo = require("../images/logo.png");

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </header>
        );
    }
}
export default Header;