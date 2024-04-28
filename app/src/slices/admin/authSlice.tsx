import {createSlice} from '@reduxjs/toolkit'
import {loginAdmin} from './ActAdminAuth'

 export interface authAdminState{
    authenticated:boolean |null,
    admin:{
        email:string | null,
        password: string | null
    }
    loading:boolean,
    error:null|string,
}
const initialState : authAdminState ={
    authenticated :false,
    admin:{
        email:  null ,
        password : null
    },
    loading:false,
    error:null

};  

const authAdminSlice = createSlice({

    name:'authadmin',
    initialState,
    reducers:{},extraReducers:(builder)=>{

        builder.addCase(loginAdmin.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(loginAdmin.fulfilled,(state,action)=>{
            state.loading=false;
            state.admin=action.payload;
            state.authenticated=true;
            state.error=null;
        }) 
        .addCase(loginAdmin.rejected,(state,action)=>{
            state.loading=false;
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
                state.authenticated=false;
            }
           
           //state.error=action.error.message;
        })
    }

}
);
export default authAdminSlice.reducer;