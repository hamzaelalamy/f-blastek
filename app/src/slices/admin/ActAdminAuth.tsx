import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
import {LOCAL_URL} from '../../constants/Config'
import  { jwtDecode } from 'jwt-decode'
import {authAdminState} from '../admin/authSlice'

export const loginAdmin = createAsyncThunk(
    '/admins/loginAdmin',async(adminCredential:authAdminState)=>{
        
    const Response = await axios.post(`${LOCAL_URL}auth/loginAdmin`,adminCredential.admin)
    console.log(jwtDecode(Response.data.token));
    localStorage.setItem('admin',JSON.stringify(Response))
    return Response.data;
    
    })