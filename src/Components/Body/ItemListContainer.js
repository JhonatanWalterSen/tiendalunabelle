import React, { useEffect, useState } from "react";
import apiProductos from "../../data";
import ItemList from "./ItemLIst";

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
            <>
                <h1>Cargando...</h1>
            </>
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

