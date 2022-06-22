import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () =>{
    return(
        <div style={styles.containerCarrito}>
            <ShoppingCartIcon color="disabled" sx={{fontSize:30}}  />
            <span style={styles.cantidad}>10</span>
        </div>
    );
}


export default CartWidget

/* Estilos */
const styles = {
    containerCarrito: {
        display: 'flex',
        alignItems: 'center',
    },
    cantidad: {
        color: '#555e6a',
        opacity: .5,
    }
}