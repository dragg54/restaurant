import React, { FC, useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { Signin } from '../../../pages/Signin';

interface IRoute {
  routeProps: JSX.Element;
}

const ProtectedRoute = ({ routeProps }: IRoute) => {
  const { isLoggedIn, isLoading } = useContext(AuthContext)!
  if (!isLoading && isLoggedIn) {
    return (
     <>
      {routeProps}
     </>
    )
  }
  return(
    <Signin />
  )
}

export default ProtectedRoute;