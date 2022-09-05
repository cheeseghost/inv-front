import React from "react";
import Navbar from "../components/navbar";
import Axios from "axios";
import { useState } from "react";


const Inadia=()=>{
    const[etiqueta,setEtiqueta]=useState("")
    const[marc,setMarc]=useState("")
    const enviar = () => {
        Axios.post("http://localhost:3000/diademas/", { 
            eti_dia:etiqueta,
            marc_dia:marc,  
        }).then((response) => {
            console.log(response)
        });
     };

    return(
        <div className="body">
            <Navbar/>
            <div className="fond">             
                <label>etiqueta:</label>
                <input placeholder="etiqueta" onChange={(e) => { setEtiqueta(e.target.value) }}/>
                <label>marca:</label>
                <input placeholder="marca" onChange={(e) => { setMarc(e.target.value) }}/>
                <div><button onClick={enviar}>enviar</button></div>
            </div>
        </div>
    )
}
export default Inadia;