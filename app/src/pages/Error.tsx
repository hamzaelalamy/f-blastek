import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    let errorStatus: number;
    let errorStatusText: string;

    if (isRouteErrorResponse(error)) {
        errorStatus = error.status;
        errorStatusText = error.statusText;
    } else {
        errorStatus = 404;
        errorStatusText = "Page Not Found";
    }

    return (
        <div>
            <h1>{errorStatus}</h1>
            <p>{errorStatusText}</p>
            <Link to="/" replace={true}>
                How about going back to safety?
            </Link>
        </div>
    );
};

export default Error;