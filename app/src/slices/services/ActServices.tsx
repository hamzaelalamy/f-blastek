import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { LOCAL_URL } from "../../constants/Config";

export const actGetServices = createAsyncThunk("services/actGetServices",async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get(LOCAL_URL+"services");
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

export const actPostServices = createAsyncThunk("services/actPostServices",async (data,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.post(LOCAL_URL+"services", data);
        return response.data;
    } catch(error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actPutServices = createAsyncThunk("services/actPutServices",async (data,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.put(LOCAL_URL+`services/${data._id}`, data);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actDeleteServices = createAsyncThunk("services/actDeleteServices",async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.delete(LOCAL_URL+`services/${id}`);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actGetCategoryById = createAsyncThunk("services/GetCategoryById",async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get(LOCAL_URL+`categories/${id}`);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});