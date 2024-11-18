import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import httpClient from '../../utils/AxiosInstance'

export const actGetInterventions = createAsyncThunk("intervetions/createIntervention",async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;     
    try { 
        const response = await httpClient.get("getAllInterventions");
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


export const actPostInterventions = createAsyncThunk("interventions/actPostInterventions",async (data,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
      
    try {

  
        const response = await httpClient.post("createIntervention", data);
        return response.data;
        
    } catch(error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actPutInterventions = createAsyncThunk("interventions/actPutInterventions",async (data,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        

        const response = await httpClient.put(`updateInterventionById/${data._id}`, data);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actDeleteInterventions = createAsyncThunk("interventions/actDeleteInterventions",async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.delete(`deleteInterventiontById/${id}`);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

