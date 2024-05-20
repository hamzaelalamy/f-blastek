import { Link } from "react-router-dom";
import welcome from "../../assets/welcome.jpg";

export default function LoginChoice() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen px-4 bg-white ">
            <div className="container grid items-center max-w-5xl grid-cols-1 gap-10 mx-auto lg:grid-cols-2">
                <div className="space-y-6">
                    <div className="space-y-2 text-center lg:text-left">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to our platform</h1>
                        <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                            Sign in as a professional or a client to get started.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            className="inline-flex items-center justify-center w-full h-10 px-6 text-sm font-medium transition-colors bg-[#F98C60] rounded-md shadow text-gray-50 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                            to={"/login/applicant"}
                        >
                            Sign in as Professional
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center w-full h-10 px-6 text-sm font-medium transition-colors bg-[#20B486] border text-gray-50 border-gray-200 rounded-md shadow-sm hover:bg-[#36a683] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                            to={"/user/login"}
                        >
                            Sign in as Client
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img
                        alt="Sign in"
                        className="object-cover mx-auto rounded-xl"
                        height="600"
                        src={welcome}
                        style={{
                            aspectRatio: "800/600",
                            objectFit: "cover",
                        }}
                        width="800"
                    />
                </div>
            </div>
        </div>
    )
}