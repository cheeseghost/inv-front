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
            <div className="inaeti">            
                <label>etiqueta:</label>
                <input className="inatica" placeholder="etiqueta" onChange={(e) => { setEtiqueta(e.target.value) }}/>
                </div>
                <div className="inaeti">
                <label>marca:</label>
                <input className="inamarc" placeholder="marca" onChange={(e) => { setMarc(e.target.value) }}/>
                </div>
                <button className="inana" onClick={enviar}>enviar</button>
            </div>
        </div>
    )
}
export default Inadia;