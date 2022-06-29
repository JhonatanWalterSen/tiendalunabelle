import React from "react";


const ItemListContainer = ({proximamente,numero1,numero2}) => {
    return (
        <>
            <p>{proximamente} </p>
            <p>1er Valor Numérico {numero1}</p>
            <p>1er Valor Numérico {numero2}</p>
            <p>Resultado {numero1 + numero2}</p>
        </>
    );
}

export default ItemListContainer

