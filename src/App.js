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

      <ItemListContainer>

      </ItemListContainer>

      <ItemCount cantidadStock={stock}>
      
      </ItemCount>
    </>
    
  );
}

export default App;


