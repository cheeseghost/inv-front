import Axios from "axios";
import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DiademaDetail=()=>{
    const { iddia } = useParams()
    const[etiqueta,setEtiqueta]=useState("")
    const[marc,setMarc]=useState("")
    const actualizar=()=>{
        Axios.put("http://localhost:3000/diademas/"+iddia,{
            eti_dia:etiqueta,
            marc_dia:marc,
        }).then((response)=>{
            console.log(response)
            })
    }
    useEffect(() => {
        Axios.get("http://localhost:3000/diademas/" + iddia).then((response) => {
            console.log(response)
            setEtiqueta(response.data.eti_dia)
            setMarc(response.data.marc_dia)
        })
    }, [iddia])

    return(
        <div className="body">
        <Navbar />
        <div className="fond">
        <div className="la">
            <label>etiqueta:</label>
            <input value={etiqueta} onChange={(e) => { setEtiqueta(e.target.value) }} />
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

export default DiademaDetail