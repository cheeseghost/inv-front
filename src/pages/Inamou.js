import React from "react";
import Navbar from "../components/navbar";
import Select from "react-select"
import Axios from "axios";
import { useState } from "react";

const Inamou = () => {
    const [etiqueta, setEtiqueta] = useState("")
    const [marc, setMarc] = useState("")
    const [perm, setPerm] = useState("")
    const enviar = () => {
        Axios.post("http://localhost:3000/mouses/", {
            eti_mou: etiqueta,
            per_mou: perm,
            mar_mou: marc,
        }).then((response) => {
            console.log(response)
        });
    };
    const options = [
        { value: 'zinko', label: 'zinko' },
        { value: 'alliance', label: 'alliance' },
        { value: 'milenium', label: 'milenium' }
    ]
    return (
        <div className="body">
            <Navbar />
            <div className="fond">
                <div className="inaeti">
                    <label>etiqueta:</label>
                    <input className="inatica" placeholder="etiqueta" onChange={(e) => { setEtiqueta(e.target.value) }} />
                </div>
                <div className="inaeti form">
                    <label>pertenece:</label>
                    <Select className="gb" options={options} onChange={(e) => { setPerm(e.value) }} />
                </div>
                <div className="inaeti">
                    <label>marca:</label>
                    <input className="inamarc" placeholder="marca" onChange={(e) => { setMarc(e.target.value) }} />
                </div>
                <button className="inana" onClick={enviar}>enviar</button>
            </div>
        </div>
    )
}
export default Inamou;