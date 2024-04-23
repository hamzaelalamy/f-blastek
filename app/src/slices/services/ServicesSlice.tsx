import { createSlice } from "@reduxjs/toolkit";

interface IServicesState {
    records: {id:number, title:string, prefix:string, img:string }[],
    loading: "idle" | "pending" | "succeded" | "failed",
    error: string | null
}

const initialState: IServicesState = {
    records: [],
    loading: "idle",
    error: null
};

const servicesSilce = createSlice({
    name: "services",
    initialState,
    reducers:{}
});

export default servicesSilce.reducer;