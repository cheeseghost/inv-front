import React from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Select from "react-select";
import Axios from "axios";
import "../styles/perfDetails.css"

const PerfDetail = () => {
    const { idper } = useParams()
    const [id, SetId] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [tuser, setTuser] = useState("");
    const [nam, setNam] = useState("");
    const [ced, setCed] = useState("");
    const [group, setGroup] = useState("");
    const [etdia, setEtdia] = useState("");
    const [etmou, setEtmou] = useState("");
    const [ettec, setEttec] = useState("");
    const [etpan, setEtpan] = useState("");
    const [ettor, setEttor] = useState("");
    const [iddia, setIddia] = useState();
    const [idmou, setIdmou] = useState();
    const [idtec, setIdtec] = useState();
    const [idpan, setIdpan] = useState();
    const [idtor, setIdtor] = useState();
    const [options4, setOptions4] = useState([]);
    const [options3, setOptions3] = useState([]);
    const [options5, setOptions5] = useState([]);
    const [options6, setOptions6] = useState([]);
    const [options7, setOptions7] = useState([]);

    const guardar = () => {
        Axios.put("http://localhost:3000/users/update/" + idper, {
            username: user,
            id_per: id,
            passe: pass,
            rol: tuser,
            nom_per: nam,
            ced_per: ced,
            gru_per: group,
            id_dia: iddia,
            id_mou: idmou,
            id_tec: idtec,
            id_pan: idpan,
            id_tor: idtor,
        }).then((response) => {
            console.log(response)
            document.location.reload();
        })
    }
    const limpiarD = () => {
        setIddia(null)
        setEtdia(null)
    }
    const limpiarTe = () => {
        setIdtec(null)
        setEttec(null)
    }
    const limpiarTo = () => {
        setIdtor(null)
        setEttor(null)
    }
    const limpiarM = () => {
        setIdmou(null)
        setEtmou(null)
    }
    const limpiarP = () => {
        setIdpan(null)
        setEtpan(null)
    }

    useEffect(() => {

        Axios.get("http://localhost:3000/users/get/" + idper).then((response) => {
            console.log(response)
            SetId(response.data.persona[0].persona.id_per)
            setUser(response.data.persona[0].persona.username)
            setTuser(response.data.persona[0].persona.rol)
            setNam(response.data.persona[0].persona.nom_per)
            setCed(response.data.persona[0].persona.ced_per)
            setGroup(response.data.persona[0].persona.gru_per)
            if (response.data.diadema.length !== 0) {
                setEtdia(response.data.diadema[0].eti_dia)
                setIddia(response.data.diadema[0].id_dia)
            }
            if (response.data.mouse.length !== 0) {
                setEtmou(response.data.mouse[0].eti_mou)
                setIdmou(response.data.mouse[0].id_mou)
            }
            if (response.data.teclado.length !== 0) {
                setEttec(response.data.teclado[0].eti_tec)
                setIdtec(response.data.teclado[0].id_tec)
            }
            if (response.data.pantalla.length !== 0) {
                setEtpan(response.data.pantalla[0].eti_pan)
                setIdpan(response.data.pantalla[0].id_pan)
            }
            if (response.data.torre.length !== 0) {
                setEttor(response.data.torre[0].eti_tor)
                setIdtor(response.data.torre[0].id_tor)
            }


        })
    }, [idper])
    useEffect(() => {
        Axios.get("http://localhost:3000/tien/", {
            id_per: id
        }).then((response) => {
            console.log(response)
            const pan = response.data.pantallas
            const tor = response.data.torres
            const tec = response.data.teclados
            const mou = response.data.mouses
            const dia = response.data.diademas
            const pann = pan.map((r) =>
            ({ value: r.pantalla.id_pan, label: r.pantalla.eti_pan }
            )
            )
            const torr = tor.map((r) =>
            ({ value: r.torre.id_tor, label: r.torre.eti_tor }
            )
            )
            const tecc = tec.map((r) =>
            ({ value: r.teclado.id_tec, label: r.teclado.eti_tec }
            )
            )
            const mouu = mou.map((r) =>
            ({ value: r.mouse.id_mou, label: r.mouse.eti_mou }
            )
            )
            const diaa = dia.map((r) =>
            ({ value: r.diadema.id_dia, label: r.diadema.eti_dia }
            )
            )
            setOptions3(mouu)
            setOptions4(pann)
            setOptions5(torr)
            setOptions6(tecc)
            setOptions7(diaa)
        })

    }, [id])
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
    return (
        <div className="bod">
            <Navbar />
            <div className="fond">
                <div className="ce" >
                    <label>usuario:</label>
                    <input className="margin-left" value={user} onChange={(e) => { setUser(e.target.value) }} />
                    <label>contraseña:</label>
                    <input placeholder={"*********"} onChange={(e) => { setPass(e.target.value) }} />
                </div>
                <div className="pp">
                    <div className="po">
                        <label>tipo de usuario:</label>
                        <Select className="gb" placeholder={tuser} options={options} onChange={(e) => { setTuser(e.value) }} />
                    </div>
                </div>
                <div className="ce" >
                    <label>nombre:</label>
                    <input className="margin-left" value={nam} onChange={(e) => { setNam(e.target.value) }} />
                    <label>cedula:</label>
                    <input type="number" pattern="[0-9]" value={ced} onChange={(e) => { setCed(e.target.value) }} />
                </div>
                <div className="pp">
                    <div className="po">
                        <label>grupo:</label>
                        <Select className="gba gb" placeholder={group} options={options2} onChange={(e) => { setGroup(e.value) }} />
                    </div>
                </div>
                <div className="pp">
                    <div className="po">
                        <label>etiqueta de diadema:</label>
                        <Select className="gba gb" placeholder={etdia} options={options7} onChange={(e) => { setIddia(e.value) }} />
                        <button className="but" onClick={limpiarD}>limpiar</button>
                    </div>
                </div>
                <div className="pp">
                    <div className="po">
                        <label>etiqueta de mouse:</label>
                        <Select className="gba gb" placeholder={etmou} options={options3} onChange={(e) => { setIdmou(e.value) }} />
                        <button className="but" onClick={limpiarM}>limpiar</button>
                    </div>
                </div>
                <div className="pp">
                    <div className="po">
                        <label>etiqueta de teclado:</label>
                        <Select className="gba gb" placeholder={ettec} options={options6} onChange={(e) => { setIdtec(e.value) }} />
                        <button className="but" onClick={limpiarTe}>limpiar</button>
                    </div>
                </div>
                <div className="pp">
                    <div className="po">
                        <label>etiqueta de pantalla:</label>
                        <Select className="gba gb" placeholder={etpan} options={options4} onChange={(e) => { setIdpan(e.value) }} />
                        <button className="but" onClick={limpiarP}>limpiar</button>
                    </div>
                </div>
                <div className="pp">
                    <div className="po">
                        <label>etiqueta de torre:</label>
                        <Select className="gba gb" placeholder={ettor} options={options5} onChange={(e) => { setIdtor(e.value) }} />
                        <button className="but" onClick={limpiarTo}>limpiar</button>
                    </div>
                </div>
                <button id="guard" onClick={guardar}>guardar</button>
            </div>

        </div>
    )
}
export default PerfDetail;