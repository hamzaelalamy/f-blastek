import { Link } from "react-router-dom"
import React from "react"

interface props {
    title: string,
    description: string,
    nav: string,
    icon: string
}

function InterestSelectionCard(props: React.PropsWithChildren<props>) {
    return (
        <div className="relative flex flex-col mt-6 text-gray-700 bg-[#82F2A7] shadow-md bg-clip-border rounded-xl max-w-xs mx-2">
            <div className="flex flex-col items-center p-6">
                <img src={props.icon} alt="applicant" className="w-24 h-24 bg-white rounded-full" />
                <h5 className="mb-2 font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                    {props.title}
                </h5>
                <p className="font-sans text-base font-light leading-relaxed text-center text-inherit">
                    {props.description}
                </p>
            </div>
            <div className="flex justify-center p-6 pt-0">
                <Link to={props.nav} className="inline-block">
                    <button
                        className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-white bg-[#fa9856] uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-[#d07f49] active:bg-[#d07f49]"
                        type="button">
                        Choose
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default InterestSelectionCard
