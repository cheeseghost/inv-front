import React from "react";
import Navbar from "../components/navbar";
import Select from "react-select";
import Axios from "axios";
import { useState } from "react";
import "../styles/Creat.css"

const Creat=()=>{
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [tuser, setTuser] = useState("");
    const [nam, setNam] = useState("");
    const [ced, setCed] = useState("");
    const [group, setGroup] = useState("");
    const enviar = () => {
        Axios.post("http://localhost:3000/users/register", { 
            username:user,
            passe:pass,
            rol:tuser,
            nom_per:nam,
            ced_per:ced,
            gru_per:group
            
        }).then((response) => {
            console.log(response)
        });
     };
    const options = [
        { value: 'user', label: 'user' },
        { value: 'admin', label: 'admin' }
      ]
      const options2 = [
        { value: 'CS', label: 'CS' },
        { value: 'DM', label: 'DM' },
        { value: 'HR', label: 'HR' },
        { value: 'SAT', label: 'SAT' },
        { value: 'SOLAR', label: 'SOLAR' },
        { value: 'BO', label: 'BO' },

      ]
    return(
        <div className="body">
            <Navbar/>
            <div className="fonddd">
                <div className="bordes">
                    <div className="cent" >
                    <label>usuario:</label>
                    <input id="inpcrea" onChange={(e) => { setUser(e.target.value) }}/>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <label>contraseña:</label>
                    <input id="inpcrea"  onChange={(e) => { setPass(e.target.value) }}/>
                    </div>
                    <div className="pos">
                    <label>tipo de usuario:</label>
                    <Select placeholder="tipo de usuario" options={options} onChange={(e) => { setTuser(e.value) }}/>
                    </div>
                    <div className="cent" >
                    <label>nombre:</label>
                    <input id="inpcrea" onChange={(e) => { setNam(e.target.value) }}/>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <label>cedula:</label>
                    <input id="inpcrea" type="number" onChange={(e) => { setCed(e.target.value) }}/>
                    </div>
                    <div className="pos">
                    <label>grupo:</label>
                    <Select placeholder="grupo" options={options2} onChange={(e) => { setGroup(e.value) }}/>
                    </div>
                <button id="env" onClick={enviar}>enviar</button>
                </div>
            </div>
        </div>
    )
}
export default Creat;