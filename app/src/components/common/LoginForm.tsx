import React, { useState } from "react";
import { loginAdmin } from "../../slices/admin/ActAdminAuth";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, admin } = useAppSelector(
    (state) => state.adminAuth
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handelLoginEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let adminCredentials = {
        admin: {
          email: email,
          password: password,
        },
        loading: true,
        error: null,
      };
      await dispatch(loginAdmin(adminCredentials));
      const responseString = localStorage.getItem("admin");

      const data = JSON.parse(responseString);
      const token = data?.data?.token;

      token ? navigate("/backoffice/") : navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <form
          className="w-full max-w-md px-8 pt-6 pb-8 mb-4 bg-white rounded md:max-w-sm"
          onSubmit={handelLoginEvent}
        >
          <h2 className="mb-6 text-xl font-bold text-center">Login</h2>
          <h6 className="mb-6 text-xs text-center">
            Please log in with your email address
          </h6>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 bg-gray-100 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 bg-gray-100 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full px-4 py-2 my-5 text-black bg-green-300 rounded md:w-100 hover:bg-green-400 h-13 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {loading ? "Loading ..." : "Sign In"}
            </button>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
          </div>
          <div>
            <a
              className="inline-block ml-4 text-sm font-bold text-blue-800 align-baseline md:ml-44 hover:underline"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
