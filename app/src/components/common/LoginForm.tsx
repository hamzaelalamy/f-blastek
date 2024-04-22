import React,{useState} from "react";
import { loginAdmin } from "../../slices/adminSlice";
import {useAppDispatch,useAppSelector} from "../../hooks/reduxHooks"
import { useNavigate  } from "react-router-dom";


function LoginForm() {
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const {loading, error, admin} = useAppSelector(
    (state) => state.admin
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
     navigate("/dashboard")
    }catch(err){
      console.log(err)
    }
    
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-sm bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handelLoginEvent}>
        <h2 className="text-center text-xl font-bold mb-6">Login</h2>
        <h6 className="text-center text-xs  mb-6">
          Please log in with your email address
        </h6>
        <div className="mb-4">
          <input
            className="shadow  appearance-none border rounded ml-14 py-2 px-3  bg-gray-100 text-sm text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Address"
            required
            value={email} onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded  ml-14 py-2 px-3  bg-gray-100 text-sm text-gray-700 bg-color leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            required
            value={password} onChange={(e)=>setPassword(e.target.value)}

          />
        </div>
        <div className="flex items-center  mx-auto justify-between">
     
          <button
            className="bg-green-300 w-72 hover:bg-green-400  text-black h-13  my-5 ml-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button> 
          
        </div>
        <div>
        <a className="inline-block align-baseline font-bold text-sm ml-44 text-blue-800 hover:underline" href="#">
        Forgot Password?
      </a>
        </div>
       
      </form>
    </div>
  );
}

export default LoginForm;
