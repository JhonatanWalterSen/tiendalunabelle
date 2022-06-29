/* import logo from './logo.svg'; */
import React from "react";
import './App.css';
import Header from './Components/Header/Header'
import ItemListContainer from './Components/Body/ItemListContainer'
import ItemCount from './ItemCount'


const App = () => {
  const stock = 7;
  return (
    <>
      <Header>

      </Header>

      <ItemListContainer
      proximamente='pasando un props : Texto'
      numero1={10}
      numero2={20}>

      </ItemListContainer>

      <ItemCount cantidadStock={stock}>

      </ItemCount>
    </>

  );
}

export default App;


