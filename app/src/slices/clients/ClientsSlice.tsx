import { createSlice } from "@reduxjs/toolkit";
import { actGetClients, actPostClients, actPutClients, actDeleteClients } from "./ActClients.tsx";

interface ICliState {
    records: { id: number, _id: string, firstName: string, lastName: string, cin: string, email: string, backgroundCheckCompleted: boolean }[],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null
}