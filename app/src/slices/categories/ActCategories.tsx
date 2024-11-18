import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { LOCAL_URL } from "../../constants/Config";
import httpClient from "../../utils/AxiosInstance";

export const actGetCategories = createAsyncThunk("categories/actGetCategories",async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.get(LOCAL_URL+"categories");
        const data = response.data;
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});