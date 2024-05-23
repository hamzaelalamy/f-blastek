import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import {
    actGetProfessionalById,
    actGetProfessionals,
} from "../../slices/professionals/ProfessionalsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { MdEventBusy } from "react-icons/md";


function ProfessionalDetails() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { loading, error, records, record } = useAppSelector(
        (state) => state.professionals
    );
    useEffect(() => {
        console.log("records:", records);
        dispatch(actGetProfessionals());
        dispatch(actGetProfessionalById(id));
        console.log("record:", record);
    }, []);

    const availableTimeSlots = [
        "6:00  - 8:00 ",
        "8:00  - 10:00 ",
        "10:00  - 12:00 ",
        "12:00  - 14:00 ",
        "14:00  - 16:00 ",
        "16:00  - 18:00 ",
        "18:00  - 20:00 ",
        "20:00  - 22:00 ",
    ];

    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const birthDate = new Date(record.birthDay);
    const shortDate = birthDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const CreateddAt = new Date(record.createdAt);
    const shortDateCreatedAt = CreateddAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });



    const availabilityTable = record.availability ? record.availability.map(({ day, times }) => (
        <tr key={day}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white  font-bold text-orange-800 text-sm">{day}</td>
            {times.map(({ slot, available, _id }) => (
                <td key={_id} className="px-5 py-5 border-b border-gray-200 text-center  bg-white font-bold text-orange-800 text-sm">
                    {available ? (
                        <svg
                            className="w-6 h-6 text-white text-center bg-green-500 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 6 9 17l-5-5" />
                        </svg>
                    ) : (
                        // <MdEventBusy className="w-6 h-6 text-white bg-red-600" />
                        <svg
                            className="w-6 h-6 text-white text-center bg-red-600 rounded-full"

                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>

                    )}
                </td>
            ))}
        </tr>
    )) : "No availability found "

    const similarProfiles =
        records.length != 0
            ? records.slice(0, 4).map((record, index) => (
                <div className="" >
                    <Link reloadDocument to={`/professional/details/${record._id}`} key={index}>
                        <div className="text-center my-2">
                            <img
                                className="h-16 w-16 rounded-full mx-auto"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt=""
                            />
                            <p className="text-main-color" >
                                {record.firstName}
                            </p>
                        </div>
                    </Link>
                </div>
            ))
            : " No Professional available";


    const experiences = record && record.experiences ? (
        <ul>
            {record.experiences.map((experience, index) => (
                <li key={index}>
                    <div className="text-teal-600">{experience}</div>
                    {/* <div className="text-gray-500 text-xs">March 2020 - Now</div> */}
                </li>
            ))}
        </ul>
    ) : "No Experiences available";

    const educations = record && record.education ? (
        <ul>
            {record.education.map((educ, index) => (
                <li key={index}>
                    <div className="text-teal-600">{educ}</div>
                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                </li>
            ))}
        </ul>
    ) : "No Educations available";



    return (
        <div>
            <div className="bg-gray-100 mt-20">
                <div className="container mx-auto my-5 p-5">
                    <div className="md:flex no-wrap md:-mx-2 ">
                        {/* -- Left Side -- */}
                        <div className="w-full md:w-3/12 md:mx-2">
                            {/* -- Profile Card --*/}
                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <img
                                        className="h-auto w-full mx-auto"
                                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                        alt=""
                                    />
                                </div>
                                <img
                                    className="w-44 h-44 rounded-full  mx-auto "
                                    src="../../../landingPage/profile1.png"
                                    alt=""
                                />

                                <h1 className="text-gray-900 font-bold text-center text-xl leading-8 my-1">
                                    {record.firstName} {record.lastName}
                                </h1>
                                <h3 className="text-gray-600 font-lg text-center font-bold leading-6">
                                    {record.specialization}
                                </h3>
                                <p className="text-sm text-gray-500 mt-5 hover:text-gray-600 leading-6">
                                    {record.bio}
                                </p>
                                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Back ground</span>
                                        {record.backgroundCheckCompleted ? (
                                            <span className="ml-auto">
                                                <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                                                    checked
                                                </span>
                                            </span>
                                        ) : (
                                            <span className="ml-auto">
                                                <span className="bg-red-500 py-1 px-2 rounded text-white text-sm">
                                                    not checked
                                                </span>
                                            </span>
                                        )}
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Member since</span>
                                        <span className="ml-auto"> {shortDateCreatedAt}</span>
                                    </li>
                                </ul>
                            </div>
                            {/* -- End of profile card -- */}
                            <div className="my-4"></div>
                            {/* -- Friends card -- */}
                            <div className="bg-white p-3 hover:shadow">
                                <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                    <span className="text-green-500">
                                        <svg
                                            className="h-5 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Similar Profiles</span>
                                </div>
                                <div className="flex gap-4  justify-center">
                                    {similarProfiles}
                                </div>
                            </div>
                            {/* <!-- End of friends card --> */}
                            <div className="flex flex-col  bg-white p-3 mt-4 hover:shadow">
                                <span className="flex gap-3 space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                    <img
                                        className="h-7 w-7 "
                                        src="../../../landingPage/gps2.png"
                                        alt=""
                                    />
                                    Geo Location
                                </span>
                                <iframe className='w-68 mx-1 h-52  mt-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21339.59057156378!2d-7.651467136016285!3d33.56440130614434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3a2e5439e89%3A0xbf888b237cbe56b1!2sARK%20X%20Talent%20Factory!5e0!3m2!1sfr!2sma!4v1716376493701!5m2!1sfr!2sma" loading="lazy" ></iframe>

                                {/* <img src="../../../landingPage/map.png" alt="" /> */}
                            </div>
                        </div>
                        {/* <!-- Right Side --> */}
                        <div className="w-full md:w-9/12 mx-2 ">
                            {/* <!-- Profile tab --> */}
                            {/* <!-- About Section --> */}
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span className="text-green-500">
                                        <svg
                                            className="h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">First Name</div>
                                            <div className="px-4 py-2">{record.firstName}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Last Name</div>
                                            <div className="px-4 py-2">{record.lastName}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Gender</div>
                                            <div className="px-4 py-2">{record.gender}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Contact No.</div>
                                            <div className="px-4 py-2">{record.phoneNumber}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Current Address
                                            </div>
                                            <div className="px-4 py-2">{record.address}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Specialization
                                            </div>
                                            <div className="px-4 py-2">{record.specialization}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Email.</div>
                                            <div className="px-4 py-2">
                                                <a
                                                    className="text-blue-800"
                                                    href="mailto:jane@example.com"
                                                >
                                                    {record.email}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Birthday</div>
                                            <div className="px-4 py-2">{shortDate}</div>
                                        </div>
                                    </div>
                                </div>
                                <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                    Contact Now
                                </button>
                            </div>
                            {/* -- End of about section -- */}

                            {/* <div className="my-4"></div> */}


                            {/* -- Experience and education --*/}
                            <div className="bg-white p-3 my-5 shadow-sm rounded-sm">
                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span className="text-green-500">
                                                <svg
                                                    className="h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Experiences</span>
                                        </div>
                                        <ul className="list-inside space-y-2">
                                            {experiences}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span className="text-green-500">
                                                <svg
                                                    className="h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path
                                                        fill="#fff"
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Education</span>
                                        </div>
                                        <ul className="list-inside space-y-2">
                                            {educations}
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- End of Experience and education grid --> */}

                            </div>
                            {/* -- Availability section --*/}

                            <div className="bg-white my-5 p-3 shadow-sm rounded-sm ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto border-collapse  border-none">
                                        <thead>
                                            <tr>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-yellow-100 text-center text-sm w-7/12 font-semibold text-orange-800  "> DAY / TIME</th>
                                                {availableTimeSlots.map((timeSlot, index) => (
                                                    <th
                                                        key={index}
                                                        className="px-8 py-3 border-b-2 border-gray-200 bg-yellow-100 text-center text-sm ml-10  w-[50px] font-semibold text-orange-800  "
                                                    >
                                                        {timeSlot}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {availabilityTable}


                                            {/* {record.availability.map(({ day, times }) => {

                                                return (
                                                    <tr key={day}>
                                                        <td>{day}</td>
                                                        {timeslots.map(slot => {
                                                            const timeSlot = times.find(time => time.slot === slot);
                                                            return (
                                                                <td key={slot}>
                                                                    {timeSlot?.available ? (
                                                                        <svg
                                                                            className="w-6 h-6 text-white bg-green-500 rounded-full"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <path d="M20 6 9 17l-5-5" />
                                                                        </svg>
                                                                    ) : (
                                                                        <MdEventBusy className="w-6 h-6 text-white bg-red-600" />
                                                                    )}
                                                                </td>
                                                            );
                                                        })}
                                                    </tr>
                                                )
                                            })} */}




                                            {/* {daysOfWeek.map((day, dayIndex) => (
                        <tr key={dayIndex}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white font-bold text-orange-800 text-sm">
                            {day}
                          </td>
                          {availableTimeSlots.map((_, timeIndex) => (
                            <td
                              key={timeIndex}
                              className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >
                                <MdEventBusy  className="w-6 h-6 text-white bg-red-600 "/>
                                {/* <svg 
     className="w-6 h-6 text-white bg-red-600 rounded-full"
    
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>


                                <svg
     className=" text-white bg-red-600"
      
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="m9 16 3-3 3 3" />
    </svg> */}
                                            {/* <svg
     className="w-6 h-6 text-white bg-green-500 rounded-full"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
 
                            </td>
                          ))}
                        </tr>
                      ))} */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* <!-- End of profile tab --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalDetails;
