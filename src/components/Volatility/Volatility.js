import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { getVolatilityCoins } from '../../redux/actions/actions';
//import {useState, useEffect} from 'react';
import Table_div from '../Utilcomps/Table_div'


const Volatility = () => {
    const dispatch = useDispatch();
    const volatility = useSelector((state) => state.volatility);

    useEffect(() => {
        dispatch(getVolatilityCoins());
        const interval = setInterval(() => {
        dispatch(getVolatilityCoins());
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    // let delay = 5000;


    // const update = function () {setTimeout(() => {
    //     dispatch(getAllCoins());
    //     }, 5000);
    //     return () => clearTimeout(update);}


    // let bucle;
    // function update () {let timerId =  setTimeout( async function tick() {
    //     //console.log(salida);
    //     var currentTime = new Date();
    //     console.log(currentTime.toLocaleTimeString());
    //     dispatch(getAllCoins());
    //     timerId = setTimeout(tick, 10000);
    // }, 10000); 
    // return () => clearTimeout(timerId);             
    // }

    
    return (
        <div>
        <Table_div  data={volatility}/> 
        {/*console.log(`estas son las cryptos ${cryptos}`)*/}        
        <button onClick={() => dispatch(getVolatilityCoins())} > ACTUALIZAR VOLATILIDAD CRYPTOS </button> 
        {/*update()*/}               
        </div>
    )
}

export default Volatility;