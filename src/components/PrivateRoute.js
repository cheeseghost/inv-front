import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  let logg = localStorage.getItem('logg');
  let rol = localStorage.getItem('rol');


  return (logg === "yes" && rol === "admin") ? <Outlet /> : <Navigate to="/login" />;
};


export default PrivateRoutes;