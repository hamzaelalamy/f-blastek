import React,{useState} from "react";
import { loginAdmin } from "../../slices/admin/AdminAuthApi";
import {useAppDispatch,useAppSelector} from "../../hooks/ReduxHooks"
import { useNavigate  } from "react-router-dom";
import Header from "./Header";


function LoginForm() {
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const {loading, error, admin} = useAppSelector(
    (state) => state.adminAuth
  )
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 
  const handelLoginEvent = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      let adminCredentials={
        admin:{
  email:email,
  password:password
        },
        loading:true,
        error:null,
      }
      dispatch(loginAdmin(adminCredentials));
      console.log("error:",error)
    // navigate("/adminCrud")
    }catch(err){
      console.log(err)
    }
    
  }
  return ( <div>
   <Header/> 
    <div className="flex justify-center items-center h-screen">
  <form className="w-full max-w-md md:max-w-sm bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={handelLoginEvent}>
    <h2 className="text-center text-xl font-bold mb-6">Login</h2>
    <h6 className="text-center text-xs mb-6">Please log in with your email address</h6>
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        className="bg-green-300 w-full md:w-100 hover:bg-green-400 text-black h-13 my-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        {loading ? 'Loading ...' : 'Sign In'}
      </button>
      {error&&( <div className="alert alert-danger" role="alert">{error}</div>)}
    </div>
    <div>
      <a className="inline-block align-baseline font-bold text-sm ml-4 md:ml-44 text-blue-800 hover:underline" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</div>
</div>
  );
}

export default LoginForm;
