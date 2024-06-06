import React from 'react'
import { useAppSelector } from '../hooks/ReduxHooks'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/configureStore'
import { Console } from 'console'

const AdminRoute= ({ children }: { children: React.ReactNode }) =>{
  
  const responseString = localStorage.getItem("admin");

  const data = JSON.parse(responseString);
  const token = data?.data?.token;


  return token ? <> {children}</> : <Navigate to="/login" />;
}

// ({children}) =>{

//     const {authenticated} = useAppSelector(state=>{state.adminAuth})
//    // const {authenticated} = loginAdmin;

//   return authenticated? children:<Navigate to ="/login"/>
// }

export default AdminRoute