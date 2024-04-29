import { createSlice } from "@reduxjs/toolkit";
import { actGetCategories } from "./ActCategories";

interface ICategoriesState {
    records: {id:number, name:string, _id:string }[],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null
}

const initialState: ICategoriesState = {
    records: [],
    loading: "idle",
    error: null
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = "pending";
        })
        .addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        })
        .addCase(actGetCategories.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        })
    }
});

export default categoriesSlice.reducer;
export {actGetCategories};
