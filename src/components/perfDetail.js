import React from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Select from "react-select";
import Axios from "axios";

const PerfDetail=()=>{
    const { idper } = useParams()
    const[id,SetId]=useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [tuser, setTuser] = useState("");
    const [nam, setNam] = useState("");
    const [ced, setCed] = useState("");
    const [group, setGroup] = useState("");

    const guardar=()=>{
        Axios.put("http://localhost:3000/users/update/"+idper,{
            username:user,
            id_per:id,
            passe:pass,
            rol:tuser,
            nom_per:nam,
            ced_per:ced,
            gru_per:group
        }).then((response)=>{
            
            console.log(response)
        })

    }

    useEffect(() => {
        Axios.get("http://localhost:3000/users/get/" + idper).then((response) => {
            console.log(response)
            SetId(response.data.id_per)
            setUser(response.data.username)
            setTuser(response.data.rol)
            setNam(response.data.nom_per)
            setCed(response.data.ced_per)
            setGroup(response.data.gru_per)

        })
    }, [idper])
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
            <div className="fond">
                <label>usuario:</label>
                <input value={user} onChange={(e) => { setUser(e.target.value) }}/>
                <label>contraseña:</label>
                <input placeholder={"*********"} onChange={(e) => { setPass(e.target.value) }}/>
                <Select className="gb" placeholder={tuser} options={options} onChange={(e) => { setTuser(e.value) }}/>
                <label>nombre:</label>
                <input value={nam} onChange={(e) => { setNam(e.target.value) }}/>
                <label>cedula:</label>
                <input type="number" pattern="[0-9]+" value={ced} onChange={(e) => { setCed(e.target.value) }}/>
                <Select className="gb" placeholder={group} options={options2} onChange={(e) => { setGroup(e.value) }}/>
                <button onClick={guardar}>guardar</button>
            </div>

        </div>
    )
}
export default PerfDetail;