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
    const [modalIsOpen1, setIsOpen1] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [modalIsOpen3, setIsOpen3] = useState(false);
    const [modalIsOpen4, setIsOpen4] = useState(false);
    const [modalIsOpen5, setIsOpen5] = useState(false);
    const openModal = () => {
        Axios.get("http://localhost:3000/torres", {
        }).then((response) => {
            console.log(response)
            const resp = response.data.torre
            const listItems = resp.map((r) =>
                <div key={r.torre.id_tor}>
                    <table>
                    <tbody>
                        <tr>
                            <td>{r.torre.mar_tor}</td>
                            <td><NavLink className="linkk" to={"inator/" + r.torre.id_tor}>{r.torre.eti_tor}</NavLink></td>
                        </tr>
                        </tbody>
                        
                    </table>
                    
                </div>
            );

            setCont(listItems);
        })
        
        setIsOpen1(true);
    }
    const openModal2 = () => {
        Axios.get("http://localhost:3000/pantallas", {
        }).then((response) => {
            console.log(response)
            const resp = response.data.pantalla
            const listItems = resp.map((r) =>
                <div key={r.pantalla.id_pan} >
                    <table>
                        <tbody>
                            <tr>
                                <td>{r.pantalla.mar_pan}</td>
                                <td><NavLink className="linkk" to={"inapan/" + r.pantalla.id_pan}>{r.pantalla.eti_pan}</NavLink></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );

            setCont(listItems);
        })
        setIsOpen2(true);
    }
    const openModal3 = () => {
        Axios.get("http://localhost:3000/teclados", {
        }).then((response) => {
            console.log(response)
            const resp = response.data.teclado
            const listItems = resp.map((r) =>
                <div key={r.teclado.id_tec} >
                    <table>
                        <tbody>
                            <tr>
                                <td>{r.teclado.mar_tec}</td>
                                <td><NavLink className="linkk" to={"inatec/" + r.teclado.id_tec}>{r.teclado.eti_tec}</NavLink></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );

            setCont(listItems);
        })
        setIsOpen3(true);
    }

    const openModal4 = () => {
        Axios.get("http://localhost:3000/mouses", {
        }).then((response) => {
            console.log(response)
            const resp = response.data.mouse
            const listItems = resp.map((r) =>
                <div key={r.mouse.id_mou} >
                    <table>
                        <tbody>
                            <tr>
                                <td>{r.mouse.mar_mou}</td>
                                <td><NavLink className="linkk" to={"inamou/" + r.mouse.id_mou}>{r.mouse.eti_mou}</NavLink></td>
                            </tr>
                            
                        </tbody>

                    </table>
                    
                </div>
                
            );

            setCont(listItems);
        })
        setIsOpen4(true);
    }
    const openModal5 = () => {
        Axios.get("http://localhost:3000/diademas", {
        }).then((response) => {
            console.log(response)
            const resp = response.data.diadema
            const listItems = resp.map((r) =>
                <div key={r.diadema.id_dia} >
                    <table>
                        <tbody>
                            <tr>
                                <td>{r.diadema.marc_dia}</td>
                                <td><NavLink className="linkk" to={"inadia/" + r.diadema.id_dia}>{r.diadema.eti_dia}</NavLink></td>
                            </tr>
                            
                        </tbody>

                    </table>
                    
                </div>
                
            );

            setCont(listItems);
        })
        setIsOpen5(true);
    }
    function closeModal1() {
        setIsOpen1(false);
    }
    function closeModal2() {
        setIsOpen2(false);
    }
    function closeModal3() {
        setIsOpen3(false);
    }
    function closeModal4() {
        setIsOpen4(false);
    }
    function closeModal5() {
        setIsOpen5(false);
    }
    return (
        <div className="body">
            <Navbar />
            <div className="fond">

                <Modal
                    isOpen={modalIsOpen1}
                    onRequestClose={closeModal1}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Example Modal"
                ><form>
                        <button className="botont" onClick={closeModal1}>close</button>

                        <ul>{cont}</ul>
                        <NavLink to="/Inator"><button className="botont">agregar</button></NavLink>
                        
                    </form>
                </Modal>
                <Modal
                    isOpen={modalIsOpen2}
                    onRequestClose={closeModal2}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Example Modal"
                ><form>
                        <button className="botont" onClick={closeModal2}>close</button>

                        <ul>{cont}</ul>
                        <NavLink to="/Inapan"><button className="botont">agregar</button></NavLink>
                        
                    </form>
                </Modal>
                <Modal
                    isOpen={modalIsOpen3}
                    onRequestClose={closeModal3}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Example Modal"
                ><form>
                        <button className="botont" onClick={closeModal3}>close</button>

                        <ul>{cont}</ul>
                        <NavLink to="/Inatec"><button className="botont">agregar</button></NavLink>
                        
                    </form>
                </Modal>
                <Modal
                    isOpen={modalIsOpen4}
                    onRequestClose={closeModal4}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Example Modal"
                ><form>
                        <button className="botont" onClick={closeModal4}>close</button>

                        <ul>{cont}</ul>
                        <NavLink to="/Inamou"><button className="botont">agregar</button></NavLink>
                        
                    </form>
                </Modal>
                <Modal
                    isOpen={modalIsOpen5}
                    onRequestClose={closeModal5}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Example Modal"
                ><form>
                        <button className="botont" onClick={closeModal5}>close</button>

                        <ul>{cont}</ul>
                        <NavLink to="/Inadia"><button className="botont">agregar</button></NavLink>
                        
                    </form>
                </Modal>
                <h1 id="titu">Disponibles</h1>
                <div id="fle">
                <button id="botontor" onClick={openModal}>Ver codigo de torre</button>
                <button id="botonpan" onClick={openModal2}>Ver codigo de pantalla</button>
                <button id="botontec" onClick={openModal3}>Ver codigo de teclado</button>
                </div>
                <div id="flf">
                <button id="botonmou" onClick={openModal4}>Ver codigo de mouse</button>
                <button id="botondia" onClick={openModal5}>Ver codigo de diadema</button>
                </div>
            </div>
        </div>
    );
};

export default Inactivo;