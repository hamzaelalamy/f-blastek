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
        ? records.map((record) => (<Link to={`/professional/details/${record._id}`}> <div className='w-50 h-50' key={record._id} >
            <div className=" flex justify-center items-center ">
                <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
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
            </div>
        </div></Link>
        )) : "No Professional available";


    return (
        <div className='flex flex-wrap gap-10 mx-5 mt-20'>
            {professionals}
        </div>
    )
}

export default ProfessionalsProfile