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
            <div className="flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 lg:px-24 lg:py-24 md:py-20 md:px-44 lg:flex-row md:gap-28">
                <div className="relative w-full pb-12 xl:pt-24 xl:w-1/2 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div>
                                <h1 className="my-2 text-2xl font-bold text-gray-800">
                                    Looks like you've found the doorway to the great nothing
                                </h1>
                                <p className="my-2 text-gray-800">
                                    Sorry about that! Please visit our homepage to get where you
                                    need to go.
                                </p>
                                <Link to="/">
                                    <button className="px-8 py-4 my-2 text-center text-white bg-indigo-600 border rounded sm:w-full lg:w-auto md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                                        Take me there!
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://i.ibb.co/G9DC8S0/404-2.png"
                                alt="404 error illustration"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="https://i.ibb.co/ck1SGFJ/Group.png"
                        alt="Illustration of a group"
                    />
                </div>
            </div>
            {/* <h1>{errorStatus}</h1>
            <p>{errorStatusText}</p>
            <Link to="/" replace={true}>
                How about going back to safety?
            </Link> */}
        </div>
    );
};

export default Error;