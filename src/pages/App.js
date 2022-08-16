import '../styles/App.css';
import React,{Fragment}  from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Correo from './Correo';
import Homead from './Homead';
import Notificaciones from './Notificaciones';
import Inactivo from './Inactivos';
import Creat from './Creat';
import Inapan from './Inapan';
import Inadia from './Inadia';
import Inamou from './Inamou';
import Inatec from './Inatec';
import Inator from './Inator';
import TorreDetail from "../components/torreDetail";
import PerfDetail from "../components/perfDetail";

import PrivateRoute from"../components/PrivateRoute";

function App() {
  return (
    <div>
    <Router>
    <Fragment>
      <Routes>
      <Route path='/login' element={<Correo/>}/>

      <Route path='/' element={<PrivateRoute/>}>
      <Route path='/homead' element={<Homead/>}/>
      <Route path='/notificaciones' element={<Notificaciones/>}/>
      <Route path='/inapan' element={<Inapan/>}/>
      <Route path='/Inadia' element={<Inadia/>}/>
      <Route path='/Inamou' element={<Inamou/>}/>
      <Route path='/Inatec' element={<Inatec/>}/>
      <Route path='/Inator' element={<Inator/>}/>
      <Route path='/inactivos' element={<Inactivo/>}/>
      <Route path='/createu' element={<Creat/>}/>
      <Route path='/inactivos/inator/:idtor' element={<TorreDetail/>}/>
      <Route path='/perfil/:idper' element={<PerfDetail/>}/>
      </Route>

      </Routes>
      </Fragment>
      </Router>
      </div>
  );
}

export default App;
