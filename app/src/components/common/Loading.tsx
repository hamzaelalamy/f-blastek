import React from "react";

type TLoading = {
    status: "idle" | "pending" | "succeeded" | "failed";
};

interface LoadingProps {
    status: TLoading;
    error: string | null;
    children: React.ReactNode;
}

const Loading = ({ status, error, children }: LoadingProps) => {
    if (status === "pending") {
        return (<p>Loading, Please wait ...</p>)
    }
    if (status === "failed") {
        return (<p>Error: {error}</p>)
    }

    return (
        <> {children} </>
    );
};

export default Loading;