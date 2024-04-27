import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import httpClient from '../../utils/AxiosInstance'

export const actGetAdmins = createAsyncThunk("admins/actGetAdmins",async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;     
    try { 
        const response = await httpClient.get("admins");
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


export const actPostAdmins = createAsyncThunk("admins/actPostAdmins",async (data,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
      
    try {

  
        const response = await httpClient.post("admins", data);
        return response.data;
    } catch(error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actPutAdmins = createAsyncThunk("admins/actPutAdmins",async (data,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        

        const response = await httpClient.put(`admins/${data._id}`, data);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actDeleteAdmins = createAsyncThunk("admins/actDeleteAdmins",async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.delete(`admins/${id}`);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actGetAdminById = createAsyncThunk("admins/actGetAdminById",async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {

      
        const response = await httpClient.get(`admins/${id}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});