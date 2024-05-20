import { createSlice } from "@reduxjs/toolkit";

interface IReview {
records:{
    clientId: string;
    professionalId: string;
    rating: number;
    description: string;

}[],
loading: "idle" | "pending" | "succeeded" | "failed",
error: string | null

}

const initialState: IProState = {
    records: [],
    loading: "idle",
    error: null,
    record:{},
};

const reviewSlice