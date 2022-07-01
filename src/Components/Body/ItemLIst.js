import React from "react";
import Item from "./Item";


const ItemList = ({ apiProductos }) =>{
    console.log(apiProductos);
    return (
        <>
        { apiProductos.map((e) =>{
            return <Item e={e} />
        }) }
        </>
    )
}


export default ItemList