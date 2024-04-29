import React from 'react'
import { useAppSelector } from '../hooks/ReduxHooks'
import { Redirect,Route } from 'react-router-dom'
const PrivateRoute=({ path, exact, children }) =>{
    const auth = useAppSelector((store)=>{store.adminAuth.authenticated})
  return auth ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to="/login" />
  );
}

export default PrivateRoute