import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { LOCAL_URL } from "../../constants/Config";

export const actGetProfessionals = createAsyncThunk("professionals/actGetProfessionals",async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get(LOCAL_URL+"professionals");
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


export const actPostProfessionals = createAsyncThunk("professionals/actPostProfessionals",async (data,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.post(LOCAL_URL+"professionals", data);
        return response.data;
    } catch(error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actPutProfessionals = createAsyncThunk("professionals/actPutProfessionals",async (data,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.put(LOCAL_URL+`professionals/${data._id}`, data);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actDeleteProfessionals = createAsyncThunk("professionals/actDeleteProfessionals",async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.delete(LOCAL_URL+`professionals/${id}`);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actGetProfessionalById = createAsyncThunk("professionals/actGetProfessionalById",async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get(LOCAL_URL+`professionals/${id}`);
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