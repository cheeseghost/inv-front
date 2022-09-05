import React from "react";
import Navbar from "../components/navbar";
import Select from "react-select"
import Axios from "axios";
import { useState } from "react";

const Inapan=()=>{
    const[etiqueta,setEtiqueta]=useState("")
    const[marc,setMarc]=useState("")
    const[perm,setPerm]=useState("")
    const enviar = () => {
        Axios.post("http://localhost:3000/pantallas/", { 
            eti_pan:etiqueta,
            per_pan:perm,
            mar_pan:marc,  
        }).then((response) => {
            console.log(response)
        });
     };
     const options = [
        { value: 'zinko', label: 'zinko' },
        { value: 'alliance', label: 'alliance' },
        { value: 'milenium', label: 'milenium' }
      ]
    return(
        <div className="body">
            <Navbar/>
            <div className="fond">
                <div className="form">              
                <label>etiqueta:</label>
                <input placeholder="etiqueta" onChange={(e) => { setEtiqueta(e.target.value) }}/>
                <label>pertenece:</label>
                <Select className="gb" options={options} onChange={(e) => { setPerm(e.value) }}/>
                <label>marca:</label>
                <input placeholder="marca" onChange={(e) => { setMarc(e.target.value) }}/>
                </div>
                <div><button onClick={enviar}>enviar</button></div>
            </div>
        </div>
    )
}
export default Inapan;