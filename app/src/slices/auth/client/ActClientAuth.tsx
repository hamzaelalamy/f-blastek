import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import httpClient from "../../../utils/AxiosInstance";

type TFormData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
};

type TClientAuth = {
    email: string;
    password: string;
};

export const actClientLogin = createAsyncThunk(
    "auth/client/actClientLogin",
    async (formData: TClientAuth, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.post("auth/loginClient", { email: formData.email, password: formData.password });
            const resData = response.data;
            localStorage.setItem('client', JSON.stringify(resData));
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

export const actClientRegister = createAsyncThunk(
    "auth/client/actClientRegister",
    async (formData: TFormData, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.post("auth/registerClient", { firstName: formData.firstname, lastName: formData.lastname, email: formData.email, password: formData.password });
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

export const actClientLogout = createAsyncThunk(
    "auth/client/actClientLogout",
    async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.post("auth/logoutClient", data);
            localStorage.removeItem('client');
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("I Think Something went wrong!");
            }
        }
    }
);

export const actClientForgotPassword = createAsyncThunk(
    "auth/client/actClientForgotPassword",
    async (email: string, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.post("auth/forgotPasswordClient", { email });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("I Think Something went wrong!");
            }
        }
    }
);

export const actClientResetPassword = createAsyncThunk(
    "auth/client/actClientResetPassword",
    async (data: { password: string, token: string }, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.post("auth/resetPasswordClient", data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("I Think Something went wrong!");
            }
        }
    }
);

export const actClientVerifyEmail = createAsyncThunk(
    "auth/client/actClientVerifyEmail",
    async (token: string, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.post("auth/verifyEmailClient", { token });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("I Think Something went wrong!");
            }
        }
    }
);



