import React from "react";

const Item = ({ e }) =>{
    console.log(e);
    return(
        <div>
            <h1>
                {e.nombre}
            </h1>
        </div>
    )
}

export default Item