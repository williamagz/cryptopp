import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { getAllCoins } from '../../redux/actions/actions';
//import {useState, useEffect} from 'react';
import Table_div from '../Utilcomps/Table_div'



const ListCoins = () => {
    const dispatch = useDispatch();
    const cryptos = useSelector((state) => state.cryptos);

    useEffect(() => {
        dispatch(getAllCoins());
        const interval = setInterval(() => {
        dispatch(getAllCoins());
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
        <Table_div  data={cryptos}/> 
        {/*console.log(`estas son las cryptos ${cryptos}`)*/}        
        <button onClick={() => dispatch(getAllCoins())} > ACTUALIZAR CRYPTOS </button> 
        {/*update()*/}               
        </div>
    )
}

export default ListCoins;