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
import PantallaDetail from "../components/pantallaDetail"
import TecladoDetail from '../components/tecladoDetail';
import MouseDetail from '../components/mouseDetail';
import DiademaDetail from '../components/diademaDetail';
import TorresTot from './torresTot';
import PantallassTot from './pantallasTot';
import TecladosTot from './tecladosTot';
import MousesTot from './mouseTot';
import DiademasTot from './diademaTot';

import PrivateRoute from"../components/PrivateRoute";
import Routee from '../components/Routee';

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
      <Route path='/inactivos/inapan/:idpan' element={<PantallaDetail/>}/>
      <Route path='/inactivos/inatec/:idtec' element={<TecladoDetail/>}/>
      <Route path='/inactivos/inamou/:idmou' element={<MouseDetail/>}/>
      <Route path='/inactivos/inadia/:iddia' element={<DiademaDetail/>}/>
      <Route path='/perfil/:idper' element={<PerfDetail/>}/>
      <Route path='/torres' element={<TorresTot/>}/>
      <Route path='/pantallas' element={<PantallassTot/>}/>
      <Route path='/teclados' element={<TecladosTot/>}/>
      <Route path='/mouses' element={<MousesTot/>}/>
      <Route path='/diademas' element={<DiademasTot/>}/>
      </Route>

      </Routes>
      </Fragment>
      </Router>
      </div>
  );
}

export default App;
