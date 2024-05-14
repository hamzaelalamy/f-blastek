import { createSlice } from "@reduxjs/toolkit";
import { actProfessionalLogin, actProfessionalRegister } from "./ActProfessionalAuth";


interface IProfessionalAuthState {
    professional?: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
    } | null;
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
}

const initialState: IProfessionalAuthState = {
    professional: null,
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
                state.professional = action.payload;
            })
            .addCase(actProfessionalLogin.rejected, (state, action) => {
                state.loading = "failed";
                if (isString(action.payload)) {
                    state.error = action.payload;
                }
            })
            .addCase(actProfessionalRegister.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actProfessionalRegister.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.professional = action.payload;
            })
            .addCase(actProfessionalRegister.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload as string;
            });
    }
})

export { actProfessionalRegister };

export default professionalAuthSlice.reducer;