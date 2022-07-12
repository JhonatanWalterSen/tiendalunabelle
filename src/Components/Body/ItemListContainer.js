import React, { useEffect, useState } from "react";
import apiProductos from "../../data";
import ItemList from "./ItemLIst";
import '../../App.css';

const promesa = new Promise((res, rej) =>{
    setTimeout(() => {
        res(apiProductos)
    }, 2000);
})



const ItemListContainer = () => {
    const [productosList, setProductosList] = useState([]);
    const [cargando, setCargando] = useState(false)

    useEffect(() =>{
        setCargando(true)
        promesa.then((response)=>{
            setCargando(false)
            setProductosList(response)
        });
    }, []);

    if (cargando) {
        return (
            <div className="loader">
            </div>
        )
    }

    return (
        <>
            <ItemList apiProductos={productosList}>

            </ItemList>
        </>
    );
}

export default ItemListContainer

/* const styles = {
    loader: {
        border: '10px solid #f3f3f3',
        borderTop: '10px solid #3498db',
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        animation: 'spin 1s linear infinite',
    },

}
 */
