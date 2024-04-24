import { createSlice, PayloadAction,createAsyncThunk  } from "@reduxjs/toolkit";



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



const adminSlice = createSlice({
    name:'admins',
    initialState,
    reducers: {
      
    },
}
);


export default adminSlice.reducer;