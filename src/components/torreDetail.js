import Axios from "axios";
import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import Select from "react-select"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/torreDetail.css"

const TorreDetail = () => {
    const { idtor } = useParams()
    const [etiqueta, setEtiqueta] = useState("");
    const [perm, setPerm] = useState("");
    const [marc, setMarc] = useState("");
    const [proc, setProc] = useState("");
    const [cantrma, setCantram] = useState("");
    const [so, setSo] = useState("");
    const [tipal, setTipal] = useState("");
    const [cantalm, setCantalm] = useState("");
    const [alm, setAlm] = useState("");

    const actualizar = () => {
        Axios.put("http://localhost:3000/torres/" + idtor, {
            eti_tor: etiqueta,
            per_tor: perm,
            mar_tor: marc,
            proc_tor: proc,
            ram_tor: cantrma,
            so_tor: so,
            ddtip_tor: tipal,
            ddcant_tor: cantalm,
            dd_tor: alm
        }).then((response) => {
            console.log(response)
        })
    }
    useEffect(() => {
        Axios.get("http://localhost:3000/torres/" + idtor).then((response) => {
            console.log(response)
            setEtiqueta(response.data.eti_tor)
            setMarc(response.data.mar_tor)
            setPerm(response.data.per_tor)
            setProc(response.data.proc_tor)
            setSo(response.data.so_tor)
            setCantram(response.data.ram_tor)
            setCantalm(response.data.ddcant_tor)
            setTipal(response.data.ddtip_tor)
            setAlm(response.data.dd_tor)
        })
    }, [idtor])

    const options = [
        { value: 'zinko', label: 'zinko' },
        { value: 'alliance', label: 'alliance' },
        { value: 'milenium', label: 'milenium' },
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
                    <label>etiqueta:</label>
                    <input className="etitor" value={etiqueta} onChange={(e) => { setEtiqueta(e.target.value) }} />
                    <label className="perteneece">pertenece:</label>
                    <Select className="gb" placeholder={perm} options={options} onChange={(e) => { setPerm(e.value) }} />
                    <label className="maarcaa">marca:</label>
                    <input className="etitor" value={marc} onChange={(e) => { setMarc(e.target.value) }} />
                </div>
                <div className="form padd">
                    <label>procesador:</label>
                    <input className="etitor" value={proc} onChange={(e) => { setProc(e.target.value) }} />
                    <label className="proccc">cantidad ram:</label>
                    <input className="etitor" type="number" value={cantrma} onChange={(e) => { setCantram(e.target.value) }} />
                    <label className="siso">sistema operativo:</label>
                    <input className="etitor" value={so} onChange={(e) => { setSo(e.target.value) }} />
                </div>
                <div className="form padd">
                    <label>tipo de almacenamiento:</label>
                    <Select className="gb" placeholder={tipal} options={options2} onChange={(e) => { setTipal(e.value) }} />
                    <label className="catal">cantidad almacenamiento:</label>
                    <input className="etitor" type="number" value={cantalm} onChange={(e) => { setCantalm(e.target.value) }} />
                    <label className="almac">almacenamiento:</label>
                    <Select className="gb" placeholder={alm} options={options3} onChange={(e) => { setAlm(e.value) }} />
                </div>
                <button className="inator" onClick={actualizar}>guardar</button>
            </div>
        </div>
    );

};

export default TorreDetail;