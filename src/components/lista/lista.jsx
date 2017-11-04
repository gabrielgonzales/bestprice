import React from 'react';
import styles from './lista.scss';

class Lista extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lista: [],
        };
    }
    componentDidMount() {
        fetch('http://localhost:3000/product', ).then(data => this.setState({ lista: data.hits }));
    }
    render() {
        return (
            <div>Lista de Produtos</div>
        );
    }
}
export default Lista;