import React from "react";
import Navbar from "../components/navbar";
import Select from "react-select"
import Axios from "axios";
import { useState } from "react";
import "../styles/Inator.css"


const Inator=()=>{
    const [etiqueta, setEtiqueta] = useState("");
    const [perm, setPerm] = useState("");
    const [marc, setMarc] = useState("");
    const [proc, setProc] = useState("");
    const [cantrma, setCantram] = useState("");
    const [so, setSo] = useState("");
    const [tipal, setTipal] = useState("");
    const [cantalm, setCantalm] = useState("");
    const [alm, setAlm] = useState("");
    const enviar = () => {
        Axios.post("http://localhost:3000/torres/", { 
            eti_tor:etiqueta,
            per_tor:perm,
            mar_tor:marc,
            proc_tor:proc,
            ram_tor:cantrma,
            so_tor:so,
            ddtip_tor:tipal,
            ddcant_tor:cantalm,
            dd_tor:alm,
            
        }).then((response) => {
            console.log(response)
        });
     };
    const options = [
        { value: 'zinko', label: 'zinko' },
        { value: 'alliance', label: 'alliance' },
        { value: 'milenium', label: 'milenium' }
      ]
      const options2 = [
        { value: 'HDD', label: 'HDD' },
        { value: 'SSD', label: 'SSD' },
      ]
      const options3 = [
        { value: 'GB', label: 'GB' },
        { value: 'TB', label: 'TB' },
      ]
      
            
    return(
        <div className="body">
            <Navbar/>
            <div className="fond">
                <div className="form">              
                <input placeholder="etiqueta" onChange={(e) => { setEtiqueta(e.target.value) }}/>
                <Select className="gb" options={options} onChange={(e) => { setPerm(e.value) }}/>
                <input placeholder="marca" onChange={(e) => { setMarc(e.target.value) }}/>
                <input placeholder="procesador" onChange={(e) => { setProc(e.target.value) }}/>
                <input type="number" placeholder="cantidad de ram" onChange={(e) => { setCantram(e.target.value) }}/>
                <input  placeholder="sistema operativo" onChange={(e) => { setSo(e.target.value) }}/>
                <Select className="gb" options={options2} onChange={(e) => { setTipal(e.value) }}/>
                <input type="number" placeholder="cantidad almacenamiento " onChange={(e) => { setCantalm(e.target.value) }}/>
                <Select className="gb" options={options3} onChange={(e) => { setAlm(e.value) }}/>
                </div>
                <div><button onClick={enviar}>enviar</button></div>
            </div>
        </div>
    )
}
export default Inator;