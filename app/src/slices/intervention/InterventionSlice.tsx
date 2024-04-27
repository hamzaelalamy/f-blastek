import { createSlice } from '@reduxjs/toolkit';
import {actGetInterventions,actPostInterventions,actPutInterventions,actDeleteInterventions} from '../intervention/ActIntervention'

interface InterventionState{
    records:{
        id:number|null,
        name: string | null;
        clientId: number | null ;
        professionalID:number | null;
        status: string | null;
        
       
    }[],
    loading:null|string,
    error:null|string,

}

const initialState : InterventionState ={
    
    records:[],
    loading:null,
    error:null,
}

   const interventionSlice = createSlice ({
    name:'interventions',
    initialState,
    reducers: {
      
    },
    extraReducers :(builder)=>{

        builder.addCase(actGetInterventions.pending, (state) => {
            state.loading = "pending";
            state.error = null
        })
        .addCase(actGetInterventions.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
            state.error = null
        })
        .addCase(actGetInterventions.rejected, (state, action) => {
            state.loading = "failed";
            if(action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
        .addCase(actPostInterventions.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actPostInterventions.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
            state.error = null;
        })
        .addCase(actPostInterventions.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
        .addCase(actPutInterventions.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actPutInterventions.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
            state.error = null;
        })
        .addCase(actPutInterventions.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
        .addCase(actDeleteInterventions.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actDeleteInterventions.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = state.records.filter(intervention => intervention.id !== action.payload.id);
            state.error = null;
        })
        .addCase(actDeleteInterventions.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
        
    }

})
export default interventionSlice.reducer;