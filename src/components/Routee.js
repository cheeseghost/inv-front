import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const Routee = ({ component: Component, ...rest }) => {
  let logg = localStorage.getItem('logg');
  let rol = localStorage.getItem('rol');

  return (logg !== "yes" && rol !== "admin") ? <Outlet /> : <Navigate to="/homead" />;
};


export default Routee;