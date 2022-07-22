export const GET_ALL_COINS = "GET_ALL_COINS";
export const GET_VOLATILITY_COINS = "GET_VOLATILITY_COINS";
const axios = require('axios');


const binance ="https://fapi.binance.com/fapi/v1/ticker/price"
const local = "http://localhost:3500/futures/coins"
const volatilidad = "http://localhost:3500/futures/volatility"



export const getAllCoins = () => {
    return async function (dispatch) {
        return fetch(binance)
        .then(response => response.json())
        .then(json => dispatch({type: GET_ALL_COINS, payload: json}))
        .catch(e => console.log(e));
    };
};

export const getVolatilityCoins = () => {
    return async function (dispatch) {
        return fetch("http://localhost:3500/futures/volatility")
        .then(response => response.json())
        .then(json => dispatch({type: GET_VOLATILITY_COINS, payload: json}))
        .catch(e => console.log(e));
    };
};


