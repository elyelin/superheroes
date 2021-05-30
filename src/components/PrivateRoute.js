import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ path, exact, component }) => {
  const token = localStorage.getItem('token');
  const condition = token && token !== '';

  return condition ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};
export default PrivateRoute;
