import {GET_ALL_COINS, GET_VOLATILITY_COINS} from '../actions/actions';
import { coins as data } from "../../components/Utilcomps/utilData/datos";
import { volatilidad } from "../../components/Utilcomps/utilData/datos";



const initialState = {
    cryptos: data,
    volatility: volatilidad,
}

const rootReducer = (state = initialState, action) =>   {
    switch (
        action.type
        ) {
            case GET_ALL_COINS: 
                return {...state, cryptos:action.payload }; 
            case GET_VOLATILITY_COINS: 
                return {...state, volatility:action.payload };
            default:
                return {...state};
            

        }

};



export default rootReducer;