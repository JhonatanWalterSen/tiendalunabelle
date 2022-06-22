import React from "react";
/* import './Header.css' */
import logo from '../../assets/logo-lunabelle.png'
import CartWidget from "../Carrito/CartWidget";
/* import fontHeader from 'https://fonts.googleapis.com/css2?family=Spinnaker&display=swap'; */


const Header = () => {
    return (
        <header style={styles.container}>
            <div style={styles.container__titulo}>
                <p style={styles.titulo}>Enviós a los siguientes paises: (Perú , Argentina, Ecuador y Chile)</p>
            </div>
            <div style={styles.marca}>
                <div style={styles.marca__ancho}>
                    <img style={styles.marca__logo} src={logo} alt="logo"/>
                    <CartWidget>
                    </CartWidget>
                </div>
            </div>
            <nav style={styles.sombra}>
                <div style={styles.categoria__ancho}>
                    <a style={styles.categoria__titulo}  href="#endregion">Belleza</a>
                    <a style={styles.categoria__titulo}  href="#endregion">Hogar</a>
                    <a style={styles.categoria__titulo}  href="#endregion">Accesorios kawaii</a>
                    <a style={styles.categoria__titulo}  href="#endregion">Accesorios para niños</a>
                </div>
            </nav>
        </header>
    )
}

export default Header

/* Estilos */
const styles = {
    container: {
        width: '100%',
    },
    container__titulo: {
        background: 'black',
        textAlign: 'center',
        color: 'white',
    },
    titulo: {
        margin: 0,
        padding: 7,
    },
    marca: {
        background: '#f3dfdc',
        width: '100%',
        display: 'flex'
    },
    marca__ancho: {
        width: 1440,
        padding: '5px 20px 5px 20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    marca__logo: {
        height: 80,
    },
    sombra:{
        boxShadow: '0px 8px 13px -2px rgba(0,0,0,0.18)',
    },
    categoria__ancho: {
        width: 1440,
        paddingTop: 15,
        paddingBottom: 15,
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoria__titulo: {
        marginLeft: 25,
        marginRight: 25, 
        textDecoration: 'none',
        outline: 'none',
        fontWeight: 'bold',
        color: 'black',
    }
}