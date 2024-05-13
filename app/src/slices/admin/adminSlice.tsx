import { createSlice } from "@reduxjs/toolkit";

import {actGetAdmins,actPostAdmins,actPutAdmins,actDeleteAdmins,actGetAdminById} from './ActAdmin'

interface AdminState{
    records:{
        id:number,
        firstName: string | null,
       lastName: string  | null,
        email:string | null,
        password: string | null
    }[],
    loading:"idle" | "pending" | "succeeded" | "failed",
    error:null|string,

}

const initialState : AdminState ={
        loading:"idle" ,
        records:[],
        error:null
    
};  



const adminSlice = createSlice({
    name:'admins',
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addCase(actGetAdmins.pending, (state) => {
            state.loading = "pending";
            state.error = null
        })
        .addCase(actGetAdmins.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
            state.error = null
        })
        .addCase(actGetAdmins.rejected, (state, action) => {
            state.loading = "failed";
            if(action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
        .addCase(actPostAdmins.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actPostAdmins.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
            state.error = null;
        })
        .addCase(actPostAdmins.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
        .addCase(actPutAdmins.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actPutAdmins.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
            state.error = null;
        })
        .addCase(actPutAdmins.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
        .addCase(actDeleteAdmins.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actDeleteAdmins.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = state.records.filter(admin => admin.id !== action.payload.id);
            state.error = null;
        })
        .addCase(actDeleteAdmins.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
        .addCase(actGetAdminById.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actGetAdminById.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = [action.payload];
            state.error = null;
        })
        .addCase(actGetAdminById.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        });
    }
});


export default adminSlice.reducer;