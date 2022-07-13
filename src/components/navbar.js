import React from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../images/logo3.png";
import campana from "../images/campana.png";
import mas from "../images/mas.png"
import "../styles/navbar.css"

const Navbar = () => {

    return (
        <div className="cont">
            <div className="cuadrito">
                <div id="logotipo"><NavLink  to="/homead"><img alt="" src={logo2}  className="Logo3" /></NavLink></div>

                <input id="aa" type="search" placeholder="searching..."/>

                <NavLink id="ina" to="/inactivos">Inactivo</NavLink>

                <div id="cam"><NavLink to="/notificaciones"><img alt="" src={campana} id="campana"/></NavLink></div>

                <div id="agr"><NavLink to="/createu"><img alt=""src={mas} id="agregar"/></NavLink></div>

                <button id="botonEx" ><NavLink id="exit" to="/">Cerrar sesion</NavLink></button>

            </div>

        </div>
        );
};

export default Navbar;