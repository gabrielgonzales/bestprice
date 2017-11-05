import React from 'react';
import styles from './navigation.scss';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Melhores Preços</Link></li>
                    <li><Link to="/lista">Faça Sua Lista</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
        );
    }
}
export default Navigation;