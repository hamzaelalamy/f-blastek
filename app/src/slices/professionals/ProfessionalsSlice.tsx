import { createSlice } from "@reduxjs/toolkit";
import { actGetProfessionals, actPostProfessionals, actPutProfessionals, actDeleteProfessionals, actGetProfessionalById } from "./ActProfessionals.tsx";

interface IProState {
    records: { id: number,
         _id: string,
        firstName : string,
        lastName : string,
        cin?: string,
        email: string,
        phoneNumber?: string,
        city: string,
        address?: string,
        geolocation?: any,
        scannedCin?: string,
        photo?: string,
        specialization: string,
        hourlyRate?: number,
        bio?: string,
        experiences?: string[],
        backgroundCheckCompleted: boolean,
        availability?:[]
        ;}[],
        record: {},
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null
}

const initialState: IProState = {
    records: [],
    loading: "idle",
    error: null,
    record:{},
};

const professionalSlice = createSlice({
    name: "professionalReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetProfessionals.pending, (state) => {
            state.loading = "pending";
            state.error = null
        })
            .addCase(actGetProfessionals.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.records = action.payload;
                state.error = null
            })
            .addCase(actGetProfessionals.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
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
            })
            .addCase(actGetProfessionalById.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actGetProfessionalById.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.record = action.payload;
                state.error = null;
            })
            .addCase(actGetProfessionalById.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            });
    }
});

export { actGetProfessionals, actPostProfessionals, actPutProfessionals, actDeleteProfessionals, actGetProfessionalById };
export default professionalSlice.reducer;