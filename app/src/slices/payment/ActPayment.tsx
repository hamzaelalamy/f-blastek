import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import httpClient from '../../utils/AxiosInstance'




export const actPostPayments= createAsyncThunk("Payments/actPostPayments",async (data,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
      
    try {

  
        const response = await httpClient.post("payment", data);
        return response.data;
    } catch(error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

