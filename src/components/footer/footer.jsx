import React from 'react';
import styles from './footer.scss';
class Footer extends React.Component{
    render(){
        let data = new Date();
        let dia = data.getDate();
        let mes = data.getMonth();
        let ano = data.getFullYear();
        return(
            <footer>BestPrice {dia}.{mes}.{ano}</footer>
        );
    }
}
export default Footer;