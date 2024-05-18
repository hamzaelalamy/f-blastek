import React, { useEffect } from 'react'
import { actGetProfessionals } from '../../slices/professionals/ProfessionalsSlice'
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { Link } from 'react-router-dom';

function ProfessionalsProfile() {

    const dispatch = useAppDispatch();
    const { loading, error, records } = useAppSelector(
        (state) => state.professionals
    );
    useEffect(() => {
        if (!records.length) {
            dispatch(actGetProfessionals());
        }
    }, [dispatch, records]);

    const professionals = records.length > 0
        ? records.map((record,index) => (<Link to={`/professional/details/${record._id}`} key={index}> <div className='flex justify-center items-center  container  max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white w-50 h-50  transition ease-in-out delay-150  hover:shadow-lg hover:-translate-y hover:scale-105  duration-200'  >
            
                <div className="">
                    <div className="relative z-10" >
                        <img className="w-full rounded-lg" src="../../../../landingPage/profile1.png" alt="Profile image" />
                        <div className=" text-start p-3 absolute w-full" style={{ bottom: '1rem' }}>
                            <p className="text-white tracking-wide uppercase text-lg font-bold">{record.firstName} {record.lastName}</p>
                            <p><a href="https://unsplash.com/@omarcelorangel" target="_blank" className="text-green-100 text-sm hover:text-green-400">{record.email}</a></p>
                        </div>
                    </div>
                    {/* <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
                              <p className="flex items-center text-gray-400"><span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>online</p> 
                             <button className="p-4 bg-[#F98C60] rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
                            <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6">
                            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                            C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                            C15.952,9,16,9.447,16,10z" />
                              </svg>
                            </button> 
                             </div>  */}
                    <div className="pt-6 pb-8 pl-2 text-gray-600 font-semibold">
                        <p className='text-gray-900'>{record.specialization}</p>
                        <p className="text-sm py-3">{record.bio}</p>
                    </div>

                    <div className="pb-10  text-center tracking-wide flex justify-around">
                        <div className="rating">
                            <p className="text-gray-400 text-sm">Rating</p>
                            <p className="text-l font-semibold text-blue-300 flex"> <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-yellow-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg> <span>4.9</span></p>

                        </div>
                        <div className="posts">
                            <p className="text-gray-400 text-sm">Hour Price</p>
                            <p className="text-l font-semibold text-blue-300">76 Dh/h</p>
                        </div>
                        <div className="Reviews">
                            <p className="text-gray-400 text-sm">Reviews</p>
                            <p className="text-l font-semibold text-blue-300">964</p>
                        </div>

                    </div>
                </div>
            
        </div></Link>
        )) : "No Professional available";


    return (
        <div >

            <form className="max-w-lg mt-20 mx-auto">
                <div className="flex">
                    {/* <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Your Email</label> */}
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 " type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                        <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Mockups</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Templates</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Design</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Logos</button>
                            </li>
                        </ul>
                    </div>
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg   border border-gray-300 focus:border-green-400  focus:outline-none focus:border-xl " placeholder="Search ..." required />
                        <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-black bg-gray-100 rounded-e-lg border border-gray-300 hover:bg-green-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>

            <div className='flex flex-wrap gap-10 mx-10 mt-10'>
                {professionals}
            </div>

        </div>
    )
}

export default ProfessionalsProfile