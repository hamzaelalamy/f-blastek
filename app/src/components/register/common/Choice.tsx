import { Link } from "react-router-dom"


function Choice() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-10 text-5xl text-[#20B486] font-bold outline-8">Que cherchez vous ?</h1>
            <div className="flex justify-center mt-6">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-[#82F2A7] shadow-md bg-clip-border rounded-xl w-96">
                    <div className="flex flex-col items-center p-6">
                        <img src="https://static.yoopies.com/_nuxt/images/market/default/component/registration/applicant.svg" alt="applicant" />
                        <h5 className="mb-2 font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                            UN JOB
                        </h5>
                        <p className="font-sans text-base font-light leading-relaxed text-center text-inherit">
                            Une baby-sitter, nounou, femme de ménage, prof particulier, aide à domicile, ...
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-0">
                        <Link to="/register/applicant" className="inline-block">
                            <button
                                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-white bg-[#fa9856] uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-[#d07f49] active:bg-[#d07f49]"
                                type="button">
                                J'ai besoin d'un job
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="relative flex flex-col mt-6 ml-6 text-gray-700 bg-[#82F2A7] shadow-md bg-clip-border rounded-xl w-96">
                    <div className="flex flex-col items-center p-6">
                        <img src="https://static.yoopies.com/_nuxt/images/market/default/component/registration/employer.svg" alt="client" />
                        <h5 className="mt-3 mb-2 font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                            UN AIDE
                        </h5>
                        <p className="font-sans text-base font-light leading-relaxed text-center text-inherit">
                            En tant que baby-sitter, nounou, femme de ménage, pet-sitter, aide à domicile, prof, ...
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-0"> {/* Added justify-center */}
                        <Link to="/register/interest" className="inline-block">
                            <button
                                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-[#d07f49] active:bg-[#d07f49] bg-[#fa9856]"
                                type="button">
                                J'ai besoin d'aide
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Choice