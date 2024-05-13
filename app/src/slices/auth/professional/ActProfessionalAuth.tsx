import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOCAL_URL } from "../../../constants/Config";
import httpClient from "../../../utils/AxiosInstance";

export const actProfessionalLogin = createAsyncThunk(
    "auth/professional/actProfessionalLogin",
    async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.post(LOCAL_URL + "auth/loginProfessional", data);
            const resData = response.data;
            return resData;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("I Think Something went wrong!");
            }
        }
    }
);

export const actProfessionalRegister = createAsyncThunk(
    "auth/professional/actProfessionalRegister",
    async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.post(LOCAL_URL + "auth/registerProfessional", data);
            const resData = response.data;
            return resData;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("I Think Something went wrong!");
            }
        }
    }
);

export const actProfessionalLogout = createAsyncThunk(
    "auth/professional/actProfessionalLogout",
    async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.post(LOCAL_URL + "auth/logoutProfessional", data);
            const resData = response.data;
            return resData;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("I Think Something went wrong!");
            }
        }
    }
);

export const actProfessionalForgotPassword = createAsyncThunk(
    "auth/professional/actProfessionalForgotPassword",
    async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.post(LOCAL_URL + "auth/forgotPasswordProfessional", data);
            const resData = response.data;
            return resData;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("I Think Something went wrong!");
            }
        }
    }
);

export const actProfessionalResetPassword = createAsyncThunk(
    "auth/professional/actProfessionalResetPassword",
    async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.patch(LOCAL_URL + "auth/resetPasswordProfessional", data);
            const resData = response.data;
            return resData;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("I Think Something went wrong!");
            }
        }
    }
);

export const actProfessionalVerifyEmail = createAsyncThunk(
    "auth/professional/actProfessionalVerifyEmail",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.get(LOCAL_URL + "auth/verifyEmailProfessional");
            const resData = response.data;
            return resData;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("I Think Something went wrong!");
            }
        }
    }
);