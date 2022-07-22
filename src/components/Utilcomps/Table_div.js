import React from "react";
import { coins as data } from "./utilData/datos";

export default function Table_div (props) {         // se le pasan los datos al componente por medio de props un JSON
    //console.log(props.id);
    if (props.length < 1) { return (<div> No hay Datos para mostrar </div>) };
    const headerData = Object.keys(props.data[0]);  // saca los encabezados del primer objeto
    //console.log(headerData);
    //console.log (props);


////////////////////////////////////////////////////////////////////////////////////////////////
   
    function divKey (array) {       // funcion que lista los datos         
        return array.map((dato) => <div className={`${dato}`}>{dato}</div>) 
    }  
    
    function divData (object) {       // funcion que lista los datos 
        const index = Object.values(object)[0];
        let key = 1;              
        return headerData.map((dato) => <div key={`col${key++}`} className={`col${key}`}>{object[dato]}</div>) 
        //return headerData.map((dato) => <div> className={`${index}${key++}`}</div>) 
    } 

    //const listItems = Object.keys(props.datos).map((item) => <div>{item}</div>);
    const divItems = props.data.map((item) => 
            <div className="filaKey" id={item.id} >   
                {divData(item)}
            </div>);

    return (
        <div className="tableKey">      
        <div className="headerKey"> {divKey(headerData)} </div>
            {divItems}                
        {/*listDatos(datos)*/}
         </div>

    )

}