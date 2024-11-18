import {createSlice} from '@reduxjs/toolkit'
import {loginAdmin} from './ActAdminAuth'

 export interface authAdminState{
    
    admin:{
        email:string | null,
        password: string | null
    }
    loading:boolean,
    error:null|string,
}
const initialState : authAdminState ={
   
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
export default authAdminSlice.reducer;