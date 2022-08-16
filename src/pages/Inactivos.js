import React, { useState } from "react";
import Navbar from "../components/navbar";
import Modal from 'react-modal';
import "../styles/Inactivos.css"
import Axios from "axios";

import { NavLink } from "react-router-dom";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '50%',
        height: '50%',
        bottom: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Inactivo = () => {
    const [cont, setCont] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        Axios.get("http://localhost:3002/torres", {
        }).then((response) => {
            console.log(response)
            const resp = response.data.torre
            const listItems = resp.map((r) =>
            
                <div key={r.id_tor}>
                    <table>
                    <tbody>
                        <tr>
                            <td>{r.mar_tor}</td>
                            <td><NavLink className="linkk" to={"inator/" + r.id_tor}>{r.eti_tor}</NavLink></td>
                        </tr>
                        </tbody>
                        
                    </table>
                    
                </div>
            );

            setCont(listItems);
        })
        
        setIsOpen(true);
    }
    const openModal2 = () => {
        Axios.get("http://localhost:3002/pantallas", {
        }).then((response) => {
            console.log(response)
            const resp = response.data.pantalla
            const listItems = resp.map((r) =>
                <div key={r.id_pan} >
                    <table>
                        <tbody>
                            <tr>
                                <td>{r.mar_pan}</td>
                                <td><NavLink className="linkk" to={"inator/" + r.id_pan}>{r.eti_pan}</NavLink></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );

            setCont(listItems);
        })
        setIsOpen(true);
    }
    const openModal3 = () => {
        Axios.get("http://localhost:3002/teclados", {
        }).then((response) => {
            console.log(response)
            const resp = response.data.teclado
            const listItems = resp.map((r) =>
                <div key={r.id_tec} >
                    <table>
                        <tbody>
                            <tr>
                                <td>{r.mar_tec}</td>
                                <td><NavLink className="linkk" to={"inatec/" + r.id_tec}>{r.eti_tec}</NavLink></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );

            setCont(listItems);
        })
        setIsOpen(true);
    }

    const openModal4 = () => {
        Axios.get("http://localhost:3002/mouses", {
        }).then((response) => {
            console.log(response)
            const resp = response.data.mouse
            const listItems = resp.map((r) =>
                <div key={r.id_mou} >
                    <table>
                        <tbody>
                            <tr>
                                <td>{r.mar_mou}</td>
                                <td><NavLink className="linkk" to={"inamou/" + r.id_mou}>{r.eti_mou}</NavLink></td>
                            </tr>
                            
                        </tbody>

                    </table>
                    
                </div>
                
            );

            setCont(listItems);
        })
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="body">
            <Navbar />
            <div className="fondd">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Example Modal"
                ><form>
                        <button id="botontor" onClick={closeModal}>close</button>

                        <ul>{cont}</ul>
                        
                    </form>
                </Modal>

                <button id="botontor" onClick={openModal}>Ver codigo de torre</button>
                &emsp;&emsp;&emsp;&emsp;&emsp;
                <button id="botonpan" onClick={openModal2}>Ver codigo de pantalla</button>
                &emsp;&emsp;&emsp;&emsp;&emsp;
                <button id="botontec" onClick={openModal3}>Ver codigo de teclado</button>
                <br /><br /><br /><br /><br /><br />
                <button id="botonmou" onClick={openModal4}>Ver codigo de mouse</button>
                &emsp;&emsp;&emsp;&emsp;&emsp;
                <button id="botondia">Ver codigo de diadema</button>

            </div>
        </div>
    );
};

export default Inactivo;