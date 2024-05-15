import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import httpClient from "../../../utils/AxiosInstance";

type TFormData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
};

type TProfessionalAuth = {
    email: string;
    password: string;
};

export const actProfessionalLogin = createAsyncThunk(
    "auth/professional/actProfessionalLogin",
    async (formData: TProfessionalAuth, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await httpClient.post("auth/loginProfessional", { email: formData.email, password: formData.password });
            const resData = response.data;
            console.log(resData);
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
    async (formData: TFormData, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            // console.log(formData.firstname, formData.lastname, formData.email, formData.password);
            const response = await httpClient.post("auth/registerProfessional", { firstName: formData.firstname, lastName: formData.lastname, email: formData.email, password: formData.password });
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
            const response = await httpClient.post("auth/logoutProfessional", data);
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
            const response = await httpClient.post("auth/forgotPasswordProfessional", data);
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
            const response = await httpClient.patch("auth/resetPasswordProfessional", data);
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
            const response = await httpClient.get("auth/verifyEmailProfessional");
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