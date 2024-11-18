import { createSlice } from "@reduxjs/toolkit";
import { actClientLogin, actClientRegister } from "./ActClientAuth";

interface IClientAuthState {
    clientAuth?: {
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

const initialState: IClientAuthState = {
    clientAuth: null,
    accessToken: null,
    loading: "idle",
    error: null,
};

const clientAuthSlice = createSlice({
    name: "clientAuth",
    initialState,
    reducers: {
        resetUI: (state) => {
            state.loading = "idle";
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(actClientLogin.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actClientLogin.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.accessToken = action.payload.token;
                state.clientAuth = action.payload.user;
            })
            .addCase(actClientLogin.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            })
            .addCase(actClientRegister.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actClientRegister.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.clientAuth = action.payload;
            })
            .addCase(actClientRegister.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            })
    }
});

export const { resetUI } = clientAuthSlice.actions;
export default clientAuthSlice.reducer;