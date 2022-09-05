import Axios from "axios";
import React from "react";
import Navbar from "../components/navbar";
import Select from "react-select";
import { useEffect } from "react";
import { useState } from "react";

const MousesTot = () => {
    const [chars, setChars] = useState([]);
    const [per, setPerm] = useState(null);
    const [cont, setCont] = useState(0);

    const filtrar = () => {
        Axios.post("http://localhost:3000/mouses/filt", {
            per_mou: per
        }).then((response) => {
            console.log(response)
            setCont(response.data.mouse.length)
            if (response.data.mouse.length !== 0)
                console.log(response)
            setChars(null)
            const resp = response.data.mouse
            const listItems = resp.map((r) =>
                <div key={r.id_mou} id="barra">
                    <table >
                        <tbody >
                            <tr>
                                <td className="tabb">{r.eti_mou}</td>
                                <td className="tabb">{r.mar_mou}</td>
                                <td className="tabb">{r.per_mou}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
            setChars(listItems)

        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3000/mouses/all/").then((response) => {
            console.log(response)
            setCont(response.data.mouse.length)
            const resp = response.data.mouse
            const listItems = resp.map((r) =>
                <div key={r.mouse.id_mou} id="barra">
                    <table >
                        <tbody >
                            <tr>
                                <td className="tabb">{r.mouse.eti_mou}</td>
                                <td className="tabb">{r.mouse.mar_mou}</td>
                                <td className="tabb">{r.mouse.per_mou}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );

            setChars(listItems);
        })
    }, [setChars])

    const options = [
        { value: 'zinko', label: 'zinko' },
        { value: 'alliance', label: 'alliance' },
        { value: 'milenium', label: 'milenium' }
    ]
    return (
        <div className="body">
            <Navbar />
            <div className="fond">
                <div id="semi">
                    <div className="pp">
                        <div className="po">
                            <label>pertenece:</label>
                            <Select className="gb" options={options} onChange={(e) => { setPerm(e.value) }} />
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
                                <td className="tabb">etiqueta</td>
                                <td className="tabb">marca</td>
                                <td className="tabb">pertenece</td>
                            </tr>

                        </thead>
                    </table>
                </div>
                <ul>{chars}</ul>
            </div>
        </div>
    )
}

export default MousesTot;