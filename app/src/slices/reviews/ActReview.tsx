import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { LOCAL_URL } from "../../constants/Config";
import httpClient from "../../utils/AxiosInstance";

export const actGetReviews = createAsyncThunk("reviews/actGetReviews", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const response = await httpClient.get(LOCAL_URL + "/reviews");
        console.log(response.data);
        
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


export const actPostReviews = createAsyncThunk("reviews/actPostReviews", async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.post(LOCAL_URL + "Reviews", data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actPutReviews = createAsyncThunk("reviews/actPutReviews", async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.put(LOCAL_URL + `Reviews/${data._id}`, data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actDeleteReviews = createAsyncThunk("reviews/actDeleteReviews", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.delete(LOCAL_URL + `Reviews/${id}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actGetProfessionalById = createAsyncThunk("reviews/actGetProfessionalById", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.get(LOCAL_URL + `Reviews/${id}`);
        console.log("pro by id", response.data);
        
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});

export const actGetAverageRating = createAsyncThunk("reviews/actGetAverageRating", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await httpClient.get(LOCAL_URL + `reviews/average/${id}`);
        console.log("review by id", response.data);
        
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("I Think Something went wrong!");
        }
    }
});