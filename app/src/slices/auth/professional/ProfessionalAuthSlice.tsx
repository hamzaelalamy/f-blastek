import { createSlice } from "@reduxjs/toolkit";
import { actProfessionalLogin, actProfessionalRegister } from "./ActProfessionalAuth";


interface IProfessionalAuthState {
    proAuth?: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
    } | null;
    accessToken?: string | null;
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
}

const initialState: IProfessionalAuthState = {
    proAuth: null,
    accessToken: null,
    loading: "idle",
    error: null,
};

const professionalAuthSlice = createSlice({
    name: "professionalAuth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actProfessionalLogin.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(actProfessionalLogin.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.accessToken = action.payload.token;
            })
            .addCase(actProfessionalLogin.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            })
            .addCase(actProfessionalRegister.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actProfessionalRegister.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.proAuth = action.payload;
            })
            .addCase(actProfessionalRegister.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            });
    }
})

export { actProfessionalRegister, actProfessionalLogin };

export default professionalAuthSlice.reducer;