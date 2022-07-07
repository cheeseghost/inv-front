import React from 'react';
import { NavLink, link } from "react-router-dom";
import logo from "../images/logo.png";
import user from "../images/user.png";
import lock from "../images/lock.png";
import Axios from "axios";
import '../styles/correo.css';
import { useState } from "react";

const Correo = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const [loginStatus, setLoginStatus] = useState("");
   Axios.defaults.withCredentials=true;

   const login = () => {
      Axios.post("http://localhost:3002/users/login", {
         usernam: username,
         passe: password,
      }).then((response) => {
         console.log(response)
         if(response.data.message){
            setLoginStatus(response.data.message)
         }else{
            setLoginStatus(response.data)
         }
      });
   };
   return (
      <div className="App">
         <div className="centro">
            <img src={logo} alt="" className="Logo" />
            <div id="form">
               <div className="inpu">
                  <input placeholder='Usuario' className='text' type="text" onChange={(e) => { setUsername(e.target.value) }} />
                  <img src={user} alt="" className="input-icon" viewBox="10 10 20 20" />
               </div>
               <pre />
               <div className="inpu">
                  <input placeholder='Contraseña' className='text' type="password" onChange={(e) => { setPassword(e.target.value) }} />
                  <img src={lock} alt="" className="input-icon" viewBox="10 10 20 20" />
               </div>
               <pre />
            </div>
            <div id="bot">
            <button id="boton" onClick={login}>Iniciar Sesión</button>
            </div>
         </div>
      </div>
   );
};

export default Correo;