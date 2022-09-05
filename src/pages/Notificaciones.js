import React from "react";
import Navbar from "../components/navbar";
import {useNavigate} from "react-router-dom";
import "../styles/Notificaciones.css"

const Notificaciones=()=>{
    const navigate =useNavigate();
    const reditor=()=>{
        navigate("/torres");
    }
    const reditec=()=>{
        navigate("/teclados");
    }
    const redipan=()=>{
        navigate("/pantallas");
    }
    const redimou=()=>{
        navigate("/mouses");
    }
    const redidia=()=>{
        navigate("/diademas");
    }
    return(
        <div className="body">
        <Navbar/>
        <div className="fond">
            <h1 id="tit">Todas</h1>
            <div id="fle">
            <button id="botonto" onClick={reditor} >Ver codigo de torre</button>
            <button id="botonpa" onClick={redipan} >Ver codigo de pantalla</button>
            <button id="botonte" onClick={reditec} >Ver codigo de teclado</button>
            </div>
            <div id="flf">
            <button id="botonmo" onClick={redimou} >Ver codigo de mouse</button>
            <button id="botondi" onClick={redidia} >Ver codigo de diadema</button>
            </div>
        </div>
        </div>
    )
}
export default Notificaciones;