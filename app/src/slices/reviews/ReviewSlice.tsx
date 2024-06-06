import { createSlice } from "@reduxjs/toolkit";
import { actGetReviews, actPostReviews, actPutReviews, actDeleteReviews, actGetProfessionalById, actGetAverageRating } from "./ActReview.tsx";

interface IReview {
filter(arg0: (review: any) => boolean): unknown;
reviews:{
    clientId: string;
    professionalId: string;
    rating: number;
    description: string;

}[],
loading: "idle" | "pending" | "succeeded" | "failed",
error: string | null

}

const initialState: IReview = {
    reviews: [],
    loading: "idle",
    error: null,
  
};

const reviewSlice= createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetReviews.pending, (state) => {
            state.loading = "pending";
            state.error = null
        })
            .addCase(actGetReviews.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.reviews = action.payload;
                state.error = null
            })
            .addCase(actGetReviews.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            })
            .addCase(actPostReviews.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actPostReviews.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.reviews = action.payload;
                state.error = null;
            })
            .addCase(actPostReviews.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            })
            .addCase(actPutReviews.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actPutReviews.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.reviews = action.payload;
                state.error = null;
            })
            .addCase(actPutReviews.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            })
            .addCase(actDeleteReviews.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actDeleteReviews.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.reviews = state.reviews.filter(professional => professional.id !== action.payload.id);
                state.error = null;
            })
            .addCase(actDeleteReviews.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            })
            .addCase(actGetProfessionalById.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actGetProfessionalById.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.reviews = action.payload;
                state.error = null;
            })
            .addCase(actGetProfessionalById.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            }).addCase(actGetAverageRating.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actGetAverageRating.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.reviews = action.payload;
                state.error = null;
            })
            .addCase(actGetAverageRating.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload == "string") {
                    state.error = action.payload;
                }
            });
    }
});

export { actGetReviews, actPostReviews, actPutReviews, actDeleteReviews, actGetProfessionalById, actGetAverageRating };
export default reviewSlice.reducer;