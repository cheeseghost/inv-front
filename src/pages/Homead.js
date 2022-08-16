import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import "../styles/Homead.css"

const Homead = () => {
    const [chars, setChars] = useState([]);
    useEffect( () => {
        Axios.get("http://localhost:3000/users/home", { 
        }).then((response) => {
            console.log(response)
            const resp = response.data.user
            const listItems = resp.map((r) =>
            <div key={r.id_per} id="barra">
                <table >
                    <tbody >
                        <tr>
                            <td className="tabb"><NavLink className="linkk" to={"/perfil/" + r.id_per}>{r.nom_per}</NavLink></td>
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

    return (
        <div className="body">
            <Navbar />
            <ul>{chars}</ul>
        </div>
    );
};


export default Homead;