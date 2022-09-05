import Axios from "axios";
import React from "react";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { useState } from "react";

const DiademasTot=()=>{
    const [chars, setChars] = useState([]);

    const [cont, setCont] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:3000/diademas/all/").then((response) => {
            console.log(response)
            const resp = response.data.diadema
            setCont(response.data.diadema.length)
            const listItems = resp.map((r) =>
            <div key={r.diadema.id_dia} id="barra">
                <table >
                    <tbody >
                        <tr>
                            <td className="tabb">{r.diadema.eti_dia}</td>
                            <td className="tabb">{r.diadema.marc_dia}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            );

            setChars(listItems);
        })
    }, [setChars])
    return(
        <div className="body">
            <Navbar/>
            <div className="fond">
            <div id="barra">
            <label>contador:</label>
                    {cont}
                    <table>
                        <thead>
                            <tr>
                                <td className="tabb">etiqueta</td>
                                <td className="tabb">marca</td>
                            </tr>
                        </thead>
                    </table>

                </div>
            <ul>{chars}</ul>
            </div>
        </div>
    )
}

export default DiademasTot;