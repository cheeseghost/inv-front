import React from "react";
import Navbar from "../components/navbar";
import Select from "react-select"
import Axios from "axios";
import { useState } from "react";
import "../styles/Inator.css"


const Inator = () => {
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
            eti_tor: etiqueta,
            per_tor: perm,
            mar_tor: marc,
            proc_tor: proc,
            ram_tor: cantrma,
            so_tor: so,
            ddtip_tor: tipal,
            ddcant_tor: cantalm,
            dd_tor: alm,

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


    return (
        <div className="body">
            <Navbar />
            <div className="fond">
                <div className="form padd">
                    <label >etiqueta:</label>
                    <input className="etitor" placeholder="etiqueta" onChange={(e) => { setEtiqueta(e.target.value) }} />
                    <label className="perteneece">pertenece:</label>
                    <Select className="gb" options={options} onChange={(e) => { setPerm(e.value) }} />
                    <label className="maarcaa">marca:</label>
                    <input className="etitor" placeholder="marca" onChange={(e) => { setMarc(e.target.value) }} />
                </div>
                <div className="form padd">
                    <label >procesador:</label>
                    <input className="etitor" placeholder="procesador" onChange={(e) => { setProc(e.target.value) }} />
                    <label className="proccc">cantidad ram:</label>
                    <input className="etitor" type="number" placeholder="cantidad de ram" onChange={(e) => { setCantram(e.target.value) }} />
                    <label className="siso">sistema operativo:</label>
                    <input className="etitor" placeholder="sistema operativo" onChange={(e) => { setSo(e.target.value) }} />
                </div>
                <div className="form padd">
                    <label>tipo de almacenamiento:</label>
                    <Select className="gb" options={options2} onChange={(e) => { setTipal(e.value) }} />
                    <label className="catal">cantidad de almacenamiento:</label>
                    <input className="etitor" type="number" placeholder="cantidad almacenamiento " onChange={(e) => { setCantalm(e.target.value) }} />
                    <label className="almac">almacenamiento:</label>
                    <Select className="gb" options={options3} onChange={(e) => { setAlm(e.value) }} />
                </div>
                <button className="inator" onClick={enviar}>enviar</button>
            </div>
        </div>
    )
}
export default Inator;