import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import {
  actGetInterventions,
  actDeleteInterventions,
} from '../../../slices/intervention/ActIntervention';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InterventionList() {
    const dispatch = useAppDispatch();
    const { loading, error, records } = useAppSelector(
      (state) => state.interventions
    );
    useEffect(() => {
        if (!records.length) {
          dispatch(actGetInterventions());
        }
      }, [dispatch, records]);
  
    const handleDelete = (userId:React.FormEvent<HTMLFormElement>) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this intervention?");
      if (confirmDelete) {
        toast("Intervetion deleted successfully", { type: "success" });
        dispatch(actDeleteInterventions(userId))
          .then(() => {console.log("Intervetion deleted successfully")})
          .catch((err) => console.error("Failed to delete admin", err));
      } else {
        // User canceled the deletion
        console.log("Deletion canceled ");
      }
      
    };
  
    const interventions =
    records.length > 0
    ? records.map((record) => (
      <tr key={record._id}>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {record.name} 
            </p>
            {/* <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">Start date: 10 Dec 2023</p> */}
          </div>
        </div>
      </td>
    
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        {record.clientId}
        </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        {record.professionalID}
        </p>
      </td> 
      
     <td className="p-4 border-b border-blue-gray-50">
      {
    record.status == 'approved' ? (
      <td className="p-4 border-b border-blue-gray-50">
        <div className="w-max">
          <div
            className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-600 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20"
            style={{ opacity: 1 }}
          >
            <span className="">{String(record.status)}</span>
          </div>
        </div>
      </td>
    ) : (
      <td className="p-4 border-b border-blue-gray-50">
        <div className="w-max">
          <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-700 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20" style={{ opacity: 1 }}>
            <span className="">{String(record.status)}</span>
          </div>
        </div>
      </td>
    )
  }
  
      </td>
          <td className="p-4 border-b border-blue-gray-50">
            <div className="flex items-center">
              <Link to={`edit/${record._id}`} >
              <button
                className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                type="button"
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                  </svg>
                </span>
              </button>
              </Link>
              <button
                className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                type="button"
                onClick={() => handleDelete(record._id)}
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-48 0 407 407"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4"
                  >
                    <path d="m89.199219 37c0-12.132812 9.46875-21 21.601562-21h88.800781c12.128907 0 21.597657 8.867188 21.597657 21v23h16v-23c0-20.953125-16.644531-37-37.597657-37h-88.800781c-20.953125 0-37.601562 16.046875-37.601562 37v23h16zm0 0" />
                    <path d="m60.601562 407h189.199219c18.242188 0 32.398438-16.046875 32.398438-36v-247h-254v247c0 19.953125 14.15625 36 32.402343 36zm145.597657-244.800781c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm0 0" />
                    <path d="m20 108h270.398438c11.046874 0 20-8.953125 20-20s-8.953126-20-20-20h-270.398438c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20zm0 0" />
                  </svg>
                </span>
              </button>
            </div>
          </td>
        </tr>
          ))
        : "No intervention available";

  return (
    <> <div className="p-6 px-0 mr-10 overflow-auto">
    <table className="w-full mt-4 text-left table-auto min-w-max">
      <thead>
        <tr>
          <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
            <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Intervention Name
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                ></path>
              </svg>
            </p>
          </th>
         
          <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
            <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Client ID
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                ></path>
              </svg>
            </p>
          </th>
          <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
            <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Professional ID
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                ></path>
              </svg>
            </p>
          </th>
          <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
            <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Status
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                ></path>
              </svg>
            </p>
          </th>
         
          <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
            <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Actions{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                ></path>
              </svg>
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        {interventions} 
      </tbody>
    </table>
  </div></>
  )
}

export default InterventionList