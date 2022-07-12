import React from "react";
import Item from "./Item";


const ItemList = ({ apiProductos }) =>{
    console.log(apiProductos);
    return (
        <div style={styles.contentAllItems}>
        { apiProductos.map((e) =>{
            return <Item e={e} />
        }) }
        </div>
    )
}


export default ItemList
const styles = {
    contentAllItems: {
        maxWidth: '1440px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
    }
}