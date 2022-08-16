import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const Routee = ({ component: Component, ...rest }) => {
  var auth = cookies.getItem('userId');

  return !auth ? <Outlet /> : <Navigate to="/home" />;
};


export default Routee;