import { createSlice } from "@reduxjs/toolkit";
import { actGetClients, actPostClients, actPutClients, actDeleteClients } from "./ActClients.tsx";

interface ICliState {
    records: { 
        _id: string, 
        firstName: string, 
        lastName: string, 
        cin?: string, 
        email: string, 
        phoneNumber?: string;
        city: string;
        address?: string;
        geoLocation?: any;
        scannedCIN?: string;
        photo?: string;
         }[],
        record: {},
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null
}

const initialState: ICliState = {
    records: [],
    loading: "idle",
    error: null,
    record:{},
};  

const clientSlice = createSlice({
    name: "clientReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetClients.pending, (state) => {
            state.loading = "pending";
            state.error = null
        })
            .addCase(actGetClients.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.records = action.payload;
                state.error = null
            })
            .addCase(actGetClients.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            })
            .addCase(actPostClients.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actPostClients.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.record = action.payload;
                state.error = null;
            })
            .addCase(actPostClients.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            })
            .addCase(actPutClients.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actPutClients.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.record = action.payload;
                state.error = null;
            })
            .addCase(actPutClients.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            })
            .addCase(actDeleteClients.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actDeleteClients.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.record = action.payload;
                state.error = null;
            })
            .addCase(actDeleteClients.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            });
    }
});

export { actGetClients, actPostClients, actPutClients, actDeleteClients}
export default clientSlice.reducer;