import React from 'react';
import styles from './navigation.scss';
import { Link } from 'react-router-dom'
class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Melhores Preço</Link></li>
                    <li><Link to="/lista">Faça Lista de Compra</Link></li>
                </ul>
            </nav>
        );
    }
}
export default Navigation;