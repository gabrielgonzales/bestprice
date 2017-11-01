import React from 'react';
import styles from './header.scss';
import Navigation from "../navigation/navigation.jsx";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Navigation />
            </header>
        );
    }
}
export default Header;