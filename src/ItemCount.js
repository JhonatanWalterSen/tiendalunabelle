
import React, { useState } from "react";
import prod from './assets/producto-tinte.png';

export const ItemCount = ({cantidadStock}) =>{

    //Estado 
    const [contador, setContador] = useState(1);
    


    const handlerClick = () =>{
        setContador(contador + 1)
        if (contador >= cantidadStock) {
            console.log('No hay '+ contador + 'Solo tenemos' + cantidadStock);
        }
    }

    const handlerClickRest = () =>{
        setContador(contador - 1)
        if (contador >= 0) {
            console.log('contador 0'); 
        }
    } 
    

    return(
        <>
            <div style={styles.card}>
                <div >
                    <img  style={styles.img} src={prod} alt="producto-1"/>
                    Precio: S/20 
                </div>
                <div style={styles.contenedor__contador}>
                    <button style={styles.btn_rest} onClick={handlerClickRest}> - </button>
                    {contador}
                    <button style={styles.btn_plus} onClick={handlerClick}> + </button>
                </div>
                <div style={styles.contenedor__aniadir}>
                    <a style={styles.aniadir_a} href="http://localhost:3000">Agregar al Carrito</a>
                </div>
            </div>
        </>
    )
}
export default ItemCount;


/* Estilos */
const styles = {
    card: {
        width: 200,
        position: 'relative',
        fontSize: 14,
        boxShadow: '0px 8px 13px -2px rgba(0,0,0,0.18)',
        textAlign: 'center',
        padding: 5,
    },
    img: {
        width: '100%',
    },

    contenedor__contador: {
        display: 'flex',
        width: '90%',
        margin: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        border:'1px solid #ccc',
        marginBottom: 10,
        marginTop:  10,
    },
    btn_plus:{
        color: '#1b3e91',
        background: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 18,
    },
    btn_rest:{
        color: '#1b3e91',
        background: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 18
    },
    contenedor__aniadir:{
        width: '90%',
        margin: 'auto',
        border:'1px solid #ccc',
        padding: '5px 0px',
        textDecoration: 'none',
        color: '#1b3e91',
    },
    aniadir_a:{
        textDecoration: 'none',
        color: '#1b3e91',
    }
}