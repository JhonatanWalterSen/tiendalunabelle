import React from "react";

const Item = ({ e }) =>{
    console.log(e);
    return(
        <>
            <div style={styles.card}>
                <div>
                    <img src={e.imagen} style={styles.img}  alt=""/>
                </div>
                <h2>
                    {e.nombre}
                </h2>
                <div style={styles.contenedor__contador}>
                    <p>{e.descripcion}</p>
                </div>
                <div style={styles.contenedor__aniadir}>
                    <a style={styles.aniadir_a} href="http://localhost:3000" >Agregar al Carrito</a>
                </div>
            </div>
        </>
    )
}

export default Item

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
        justifyContent: 'cener',
        alignItems: 'center',
        border:'1px solid #ccc',
        marginBottom: 10,
        marginTop:  10,
        justifyContent: 'center',
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

