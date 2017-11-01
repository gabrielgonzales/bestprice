import React from 'react';
import styles from './navigation.scss';

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Melhores Preço</li>
                    <li>Faça Lista de Compra</li>
                </ul>
            </nav>
        );
    }
}
export default Navigation;