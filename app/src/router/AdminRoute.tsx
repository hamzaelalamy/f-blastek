import React from 'react'
import { useAppSelector } from '../hooks/ReduxHooks'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/configureStore'

const AdminRoute= ({ children }: { children: React.ReactNode }) => {
  const { authenticated }: { authenticated: boolean } = useAppSelector((state: RootState) => state.adminAuth);

  return authenticated ? <>{children}</> : <Navigate to="/login" />;
}

// ({children}) =>{

//     const {authenticated} = useAppSelector(state=>{state.adminAuth})
//    // const {authenticated} = loginAdmin;

//   return authenticated? children:<Navigate to ="/login"/>
// }

export default AdminRoute