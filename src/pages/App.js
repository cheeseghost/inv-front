import '../styles/App.css';
import React,{Fragment}  from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Correo from './Correo';
import Homead from './Homead';
import Notificaciones from './Notificaciones';
import Inactivo from './Inactivos';
import Creat from './Creat';


function App() {
  return (
    <div>
    <Router>
    <Fragment>
      <Routes>
      <Route path='/' element={<Correo/>}/>
      <Route path='/homead' element={<Homead/>}/>
      <Route path='/notificaciones' element={<Notificaciones/>}/>
      <Route path='/inactivos' element={<Inactivo/>}/>
      <Route path='/createu' element={<Creat/>}/>
      </Routes>
      </Fragment>
      </Router>
      </div>
  );
}

export default App;
