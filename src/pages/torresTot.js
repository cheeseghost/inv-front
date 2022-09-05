import Axios from "axios";
import React from "react";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import Select from "react-select";
import { useState } from "react";
import "../styles/torresTot.css"

const TorresTot = () => {
    const [chars, setChars] = useState([]);
    const [per, setPerm] = useState(null);
    const [tipal, setTipal] = useState(null);
    const [cont, setCont] = useState(0);

    const filtrar = () => {
        Axios.post("http://localhost:3000/torres/filt/", {
            per_tor: per, ddtip_tor: tipal
        }).then((response) => {
            setCont(response.data.torre.length)
            if (response.data.torre.length !== 0)
                console.log(response)
            setChars(null)
            const resp = response.data.torre
            
            const listItems = resp.map((r) =>
                <div key={r.id_tor} id="barra">
                    <table >
                        <tbody >
                            <tr>
                                <td id="et">{r.eti_tor}</td>
                                <td id="per">{r.mar_tor}</td>
                                <td id="mar">{r.per_tor}</td>
                                <td id="pro">{r.proc_tor}</td>
                                <td id="ram">{r.ram_tor}</td>
                                <td id="so">{r.so_tor}</td>
                                <td id="ta">{r.ddtip_tor}</td>
                                <td id="ca">{r.ddcant_tor}</td>
                                <td id="taa">{r.dd_tor}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
            setChars(listItems)

        })
    }


    useEffect(() => {
        Axios.get("http://localhost:3000/torres/all/").then((response) => {
            console.log(response)
            const resp = response.data.torre
            setCont(response.data.torre.length)
            const listItems = resp.map((r) =>
                <div key={r.torre.id_tor} id="barra">
                    <table >
                        <tbody >
                            <tr>
                                <td id="et">{r.torre.eti_tor}</td>
                                <td id="per">{r.torre.mar_tor}</td>
                                <td id="mar">{r.torre.per_tor}</td>
                                <td id="pro">{r.torre.proc_tor}</td>
                                <td id="ram">{r.torre.ram_tor}</td>
                                <td id="so">{r.torre.so_tor}</td>
                                <td id="ta">{r.torre.ddtip_tor}</td>
                                <td id="ca">{r.torre.ddcant_tor}</td>
                                <td id="taa">{r.torre.dd_tor}</td>
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
    const options2 = [
        { value: 'HDD', label: 'HDD' },
        { value: 'SSD', label: 'SSD' },
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
                            <label>tipo de almacenamiento:</label>
                            <Select className="gb" options={options2} onChange={(e) => { setTipal(e.value) }} />
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
                                <td id="ettit">etiqueta</td>
                                <td id="pertit">marca</td>
                                <td id="martit">pertenece</td>
                                <td id="protit">procesador</td>
                                <td id="ramtit">cantidad ram</td>
                                <td id="sotit">sistema operativo</td>
                                <td id="tatit">tipo de almacenamiento</td>
                                <td id="catit">cantidad almacenamiento</td>
                                <td id="tatit">tera o giga</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <ul>{chars}</ul>
            </div>
        </div>
    )
}

export default TorresTot;