import { createSlice } from "@reduxjs/toolkit";
import { actProfessionalLogin, actProfessionalRegister } from "./ActProfessionalAuth";

const initialState = {
    professional: null,
    loading: false,
    error: null,
};