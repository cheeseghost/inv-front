import Axios from "axios";
import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import Select from "react-select"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MouseDetail=()=>{
    const { idmou } = useParams()
    const[etiqueta,setEtiqueta]=useState("")
    const[marc,setMarc]=useState("")
    const[perm,setPerm]=useState("")

    const actualizar=()=>{
        Axios.put("http://localhost:3000/mouses/"+idmou,{
            eti_mou:etiqueta,
            per_mou:perm,
            mar_mou:marc,
        }).then((response)=>{
            console.log(response)
            })
    }
    useEffect(() => {
        Axios.get("http://localhost:3000/mouses/" + idmou).then((response) => {
            console.log(response)
            setEtiqueta(response.data.eti_mou)
            setMarc(response.data.mar_mou)
            setPerm(response.data.per_mou)
        })
    }, [idmou])

    const options = [
        { value: 'zinko', label: 'zinko' },
        { value: 'alliance', label: 'alliance' },
        { value: 'milenium', label: 'milenium' },
    ]
    return(
        <div className="body">
        <Navbar />
        <div className="fond">
        <div className="la">
            <label>etiqueta:</label>
            <input value={etiqueta} onChange={(e) => { setEtiqueta(e.target.value) }} />
            </div>
            <div className="form">
                <label className="la">pertenece:</label>
                <Select className="gb aco" placeholder={perm} options={options} onChange={(e) => { setPerm(e.value) }} />
            </div>
            <div className="la">
            <label>marca:</label>
            <input value={marc} onChange={(e) => { setMarc(e.target.value) }} />
            </div>
            <div>
            <button onClick={actualizar}>guardar</button>
            </div>
        </div>
    </div>
    )

}

export default MouseDetail