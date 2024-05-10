import httpClient from "../utils/AxiosInstance";
import { useState } from "react";
import axios from "axios";
import e from "express";
import { set } from "react-hook-form";

type TStatus = "idle" | "checking" | "availbale" | "notAvailbale" | "failed";

const useCheckEmailAvailability = () => {
    const [emailAvailabilityStatus, setEmailAvailabilityStatus] = useState<TStatus>("idle");

    const [enteredEmail, setEnteredEmail] = useState<string | null>(null);

    const checkEmailAvailability = (email: string) => {
        setEnteredEmail(email);
        setEmailAvailabilityStatus("checking");
        try {
            const response = httpClient.get("professionals")
        } catch (error) {
            setEmailAvailabilityStatus("failed");
        }
    };


};

export default useCheckEmailAvailability;