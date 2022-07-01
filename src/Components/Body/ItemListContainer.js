import React from "react";
import ItemList from "./ItemLIst";

const productosLunabelle = [
    {id:2000, nombre:'Uñas',descripcion:'para uso personal' ,precio: 30, stock: 20},
    {id:2001, nombre:'Tinte',descripcion:'diferentes colores' ,precio: 60, stock: 11},
    {id:2002, nombre:'Audifonosñas',descripcion:'Rosa / Blanco / Negro' ,precio: 85, stock: 15},
    {id:2003, nombre:'Secadoras',descripcion:'para uso personal' ,precio: 35, stock: 10},
]

const ItemListContainer = ({proximamente,numero1,numero2}) => {
    return (
        <>
            <p>{proximamente} </p>
            <p>1er Valor Numérico {numero1}</p>
            <p>1er Valor Numérico {numero2}</p>
            <p>Resultado {numero1 + numero2}</p>
            <ItemList apiProductos={productosLunabelle}>

            </ItemList>
        </>
    );
}

export default ItemListContainer

