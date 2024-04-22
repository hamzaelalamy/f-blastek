import { createSlice, PayloadAction,createAsyncThunk  } from "@reduxjs/toolkit";
import {LOCAL_URL} from '../constants/Config'
import axios from "axios";



interface AdminState{
    admin:{
        email:string | null,
        password: string | null
    }
    loading:boolean,
    error:null|string,

}

const initialState : AdminState ={
        loading:false,
        admin:{
            email:  null ,
            password : null
        },
        error:null
    
};  

export const loginAdmin = createAsyncThunk(
'/admin/loginAdmin',async(adminCredential:AdminState)=>{
    console.log(adminCredential);
const request = await axios.post(`${LOCAL_URL}api/auth/loginAdmin`,adminCredential)

const response= await request.data;
//localStorage.setItem('admin',JSON.stringify(response))
return response;

}

);

const adminSlice = createSlice({
    name:'admin',
    initialState,
    reducers: {
      
    },
    extraReducers:(builder)=>{

        builder.addCase(loginAdmin.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(loginAdmin.fulfilled,(state,action)=>{
            state.loading=false;
            state.admin=action.payload;
            state.error=null;
        }) 
        .addCase(loginAdmin.rejected,(state,action)=>{
            state.loading=false;
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
           
           //state.error=action.error.message;
        })
    }

}
);


export default adminSlice.reducer;