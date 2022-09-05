import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import Axios from "axios";
import "../styles/Homead.css"

const Homead = () => {
    const [chars, setChars] = useState([]);
    const [gro, setGro] = useState(null);
    const [cont, setCont] = useState(0);


    const filtrar = () => {
        Axios.post("http://localhost:3000/users/filt", {
            gru_per: gro
        }).then((response) => {
            console.log(response)
            setCont(response.data.user.length)
            if (response.data.user.length !== 0)
                console.log(response)
            setChars(null)
            const resp = response.data.user
            const listItems = resp.map((r) =>
                <div key={r.id_per} id="barra">
                    <table >
                        <tbody >
                            <tr>
                                <td className="tabbb"><NavLink className="linkk" to={"/perfil/" + r.id_per}>{r.nom_per}</NavLink></td>
                                <td className="tabb">{r.ced_per}</td>
                                <td className="tabb">{r.gru_per}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
            setChars(listItems)

        })
    }
    useEffect(() => {
        Axios.get("http://localhost:3000/users/home", {
        }).then((response) => {
            console.log(response)
            setCont(response.data.user.length)
            const resp = response.data.user
            const listItems = resp.map((r) =>
                <div key={r.id_per} id="barra">
                    <table >
                        <tbody >
                            <tr>
                                <td className="tabbb"><NavLink className="linkk" to={"/perfil/" + r.id_per}>{r.nom_per}</NavLink></td>
                                <td className="tabb">{r.ced_per}</td>
                                <td className="tabb">{r.gru_per}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );

            setChars(listItems);
        })


    }, [setChars])

    const options = [
        { value: 'CS', label: 'CS' },
        { value: 'DM', label: 'DM' },
        { value: 'HR', label: 'HR' },
        { value: 'SAT', label: 'SAT' },
        { value: 'SOLAR', label: 'SOLAR' },
        { value: 'BO', label: 'BO' },
    ]

    return (
        <div className="bo">
            <Navbar />
            <div id="fon">
                <div id="fo">
                <div id="semi">
                    <div className="pp">
                        <div className="po">
                            <label>pertenece:</label>
                            <Select className="gb" options={options} onChange={(e) => { setGro(e.value) }} />
                            <button className="bt" onClick={filtrar}>filtrar</button>
                        </div>
                    </div>
                </div>
                <div id="barra">
                    <label>contador:</label>
                    {cont}
                    <table>
                        <thead>
                            <tr>
                                <td id="usua">usuario</td>
                                <td id="ced">cedula</td>
                                <td id="grup">grupos</td>
                            </tr>
                        </thead>
                    </table>
                </div>

                <ul>{chars}</ul>
            </div>
            </div>
        </div>
    );
};


export default Homead;