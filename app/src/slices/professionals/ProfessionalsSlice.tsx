import { createSlice } from "@reduxjs/toolkit";
import {actGetProfessionals, actPostProfessionals, actPutProfessionals, actDeleteProfessionals } from "./ActProfessionals.tsx";

interface IProState {
    records: {id:number, title:string, prefix:string, img:string }[],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null
}

const initialState: IProState = {
    records: [],
    loading: "idle",
    error: null
};

const professionalSlice = createSlice({
    name: "professional",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(actGetProfessionals.pending, (state) => {
            state.loading = "pending";
            state.error = null
        });
        builder.addCase(actGetProfessionals.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
            state.error = null
        });
        builder.addCase(actGetProfessionals.rejected, (state, action) => {
            state.loading = "failed";
            if(action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
        .addCase(actPostProfessionals.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actPostProfessionals.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
            state.error = null;
        })
        .addCase(actPostProfessionals.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
        .addCase(actPutProfessionals.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actPutProfessionals.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
            state.error = null;
        })
        .addCase(actPutProfessionals.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
        .addCase(actDeleteProfessionals.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actDeleteProfessionals.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = state.records.filter(professional => professional.id !== action.payload.id);
            state.error = null;
        })
        .addCase(actDeleteProfessionals.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        });
    }
});

export {actGetProfessionals, actPostProfessionals, actPutProfessionals, actDeleteProfessionals};
export default professionalSlice.reducer;