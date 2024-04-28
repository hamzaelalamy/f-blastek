import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../utils/AxiosInstance";
import axios from 'axios';
import { LOCAL_URL } from "../../constants/Config";

export const actGetServices = createAsyncThunk("service/actGetServices",async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.get(LOCAL_URL+"service");
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

export const actPostServices = createAsyncThunk("service/actPostServices",async (data,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.post(LOCAL_URL+"service", data);
        return response.data;
    } catch(error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actPutServices = createAsyncThunk("service/actPutServices",async (data,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.put(LOCAL_URL+`service/${data._id}`, data);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actDeleteService = createAsyncThunk("service/actDeleteServices",async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.delete(LOCAL_URL+`service/${id}`);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actGetCategories = createAsyncThunk("service/actGetCategories",async (_,thunkAPI) => {
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