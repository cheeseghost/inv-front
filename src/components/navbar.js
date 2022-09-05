import React,{ useEffect } from "react";
import {useNavigate, NavLink} from "react-router-dom";
import logo2 from "../images/logo3.png";
import campana from "../images/campana.png";
import mas from "../images/mas.png"
import "../styles/navbar.css"
import Axios from "axios";

const Navbar = () => {
    const navigate =useNavigate();
    const cerrar = () => {
        Axios.get("http://172.28.103.42:3000/users/exit", { 
        }).then((response) => {
            console.log(response)
            if(response.data.loggedIn===false){
                localStorage.removeItem("logg");
                localStorage.removeItem("rol");
                navigate("/login");
                
            }
        });
     };


   useEffect(() => {
    
    Axios.get("http://localhost:3000/users/login").then((response) => {
        console.log(response)
       if (response.data.loggedIn === true) {
        if(localStorage.getItem('logg')==="yes" && localStorage.getItem('rol')==="admin"){
        }else{
            navigate("/login");
        }
       }else{
        document.cookie=null
        localStorage.removeItem("logg");
        localStorage.removeItem("rol");
        navigate("/login");
        
       }
    })
 }, [])
    return (
        <div className="cont">
            <div className="cuadrito">
                <div id="logotipo"><NavLink  to="/homead"><img alt="" src={logo2}  className="Logo3" /></NavLink></div>

                <NavLink id="ina" to="/inactivos">Disponibles</NavLink>

                <div id="cam"><NavLink to="/notificaciones"><img alt="" src={campana} id="campana"/></NavLink></div>

                <div id="agr"><NavLink to="/createu"><img alt=""src={mas} id="agregar"/></NavLink></div>

                <button id="botonEx" onClick={cerrar}>Cerrar sesion</button>

            </div>

        </div>
        );
};

export default Navbar;