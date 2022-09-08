import Axios from "axios";
import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import Select from "react-select"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const TecladoDetail = () => {
    const { idtec } = useParams()
    const [etiqueta, setEtiqueta] = useState("")
    const [marc, setMarc] = useState("")
    const [perm, setPerm] = useState("")

    const actualizar = () => {
        Axios.put("http://localhost:3000/teclados/" + idtec, {
            eti_tec: etiqueta,
            per_tec: perm,
            mar_tec: marc,
        }).then((response) => {
            console.log(response)
        })
    }
    useEffect(() => {
        Axios.get("http://localhost:3000/teclados/" + idtec).then((response) => {
            console.log(response)
            setEtiqueta(response.data.eti_tec)
            setMarc(response.data.mar_tec)
            setPerm(response.data.per_tec)
        })
    }, [idtec])

    const options = [
        { value: 'zinko', label: 'zinko' },
        { value: 'alliance', label: 'alliance' },
        { value: 'milenium', label: 'milenium' },
    ]
    return (
        <div className="body">
            <Navbar />
            <div className="fond">
                <div className="inaeti">
                    <label>etiqueta:</label>
                    <input className="inatica" value={etiqueta} onChange={(e) => { setEtiqueta(e.target.value) }} />
                </div>
                <div className="inaeti form">
                    <label>pertenece:</label>
                    <Select className="gb" placeholder={perm} options={options} onChange={(e) => { setPerm(e.value) }} />
                </div>
                <div className="inaeti">
                    <label>marca:</label>
                    <input className="inamarc" value={marc} onChange={(e) => { setMarc(e.target.value) }} />
                </div>
                <div>
                    <button className="inana" onClick={actualizar}>guardar</button>
                </div>
            </div>
        </div>
    )

}

export default TecladoDetail