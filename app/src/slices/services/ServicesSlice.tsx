import { createSlice } from "@reduxjs/toolkit";
import { actGetServices, actPostServices, actPutServices, actDeleteService, actGetCategories } from "./ActServices";

interface IServicesState {
    records: {id:number, name:string, description:string, categoryId:object }[],
    loading: "idle" | "pending" | "succeded" | "failed",
    error: string | null
}

const initialState: IServicesState = {
    records: [],
    loading: "idle",
    error: null
};

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        // GET
        builder.addCase(actGetServices.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(actGetServices.fulfilled, (state, action) => {
            state.loading = "succeded";
            state.records = action.payload;
        });
        builder.addCase(actGetServices.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });

        // POST
        builder.addCase(actPostServices.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(actPostServices.fulfilled, (state, action) => {
            state.loading = "succeded";
            state.records.push(action.payload);
        });
        builder.addCase(actPostServices.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });

        // PUT
        builder.addCase(actPutServices.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(actPutServices.fulfilled, (state, action) => {
            state.loading = "succeded";
            const index = state.records.findIndex((record) => record.id === action.payload.id);
            if(index !== -1){
                state.records[index] = action.payload;
            }
        });
        builder.addCase(actPutServices.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });

        // DELETE
        builder.addCase(actDeleteService.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(actDeleteService.fulfilled, (state, action) => {
            state.loading = "succeded";
            state.records = state.records.filter((record) => record.id !== action.payload.id);
        });
        builder.addCase(actDeleteService.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = "succeded";
            state.records = action.payload;
        });
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });
    }
});

export default servicesSlice.reducer;
export {actGetServices, actPostServices, actPutServices, actDeleteService, actGetCategories};