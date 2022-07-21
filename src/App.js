import React from "react";
import {coins as data} from './components/Utilcomps/utilData/datos';
import { Route } from "react-router-dom";
import './App.css';
// importacion de componentes
import Table_div from './components/Utilcomps/Table_div';
import ListCoins from './components/ListCoins/ListCoins'
import Volatility from './components/Volatility/Volatility'

function App() {
  return (
    <div>
    <a> TABLA DE CRYPTOS </a> 
    <a> LISTA CRYPTOS DEL STORE </a>
    <ListCoins>  </ListCoins>  
    <a> datos
    <Volatility> </Volatility>
    </a>          
    </div>   
  );
}

export default App;
