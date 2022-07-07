import '../styles/App.css';
import React,{Fragment}  from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Correo from './Correo';

function App() {
  return (
    <div>
    <Router>
    <Fragment>
      <Routes>
      <Route path='/' element={<Correo/>}/>
      </Routes>
      </Fragment>
      </Router>
      </div>
  );
}

export default App;
