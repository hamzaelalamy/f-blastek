import httpClient from "../utils/AxiosInstance";
import { useState } from "react";

type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed";

const useCheckEmailAvailability = () => {
    const [emailAvailabilityStatus, setEmailAvailabilityStatus] = useState<TStatus>("idle");

    const [enteredEmail, setEnteredEmail] = useState<string | null>(null);

    const checkEmailAvailability = async (email: string) => {

        setEnteredEmail(email);
        setEmailAvailabilityStatus("failed");

        try {
            const response = await httpClient.get(`/professionals/check-email-availability/${email}`)
            // console.log(response.data.isEmailAvailable);
            if (response.data.isEmailAvailable === true) {
                setEmailAvailabilityStatus("available");
            } else {
                setEmailAvailabilityStatus("notAvailable");
            }
        } catch (err) {
            setEmailAvailabilityStatus("failed");
        }
    }

    const resetCheckEmailAvailability = () => {
        setEmailAvailabilityStatus("idle");
        setEnteredEmail(null);
    }

    return { emailAvailabilityStatus, enteredEmail, checkEmailAvailability, resetCheckEmailAvailability };
};

export default useCheckEmailAvailability;