import { createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from 'axios';
import { LOCAL_URL } from "../../constants/Config";
import httpClient from "../../utils/AxiosInstance";

export const actGetClients = createAsyncThunk("clients/actGetClients", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    // Retrieve the response string from local storage
    // const responseString = localStorage.getItem('admin');
    // const data = JSON.parse(responseString);
    // const token = data.data.token;

    try {
        const response = await httpClient.get(LOCAL_URL + "clients");
        const data = response.data;
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actPostClients = createAsyncThunk("clients/actPostClients", async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.post(LOCAL_URL + "clients", data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actPutClients = createAsyncThunk("clients/actPutClients", async (data, thunkAPI) => {  
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.put(LOCAL_URL + `clients/${data._id}`, data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actDeleteClients = createAsyncThunk("clients/actDeleteClients", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.delete(LOCAL_URL + `clients/${id}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actGetClientById = createAsyncThunk("clients/actGetClientById", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.get(LOCAL_URL + `clients/${id}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});