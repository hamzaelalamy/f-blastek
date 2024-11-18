
function AdminCrud() {
  return (
    <div>

      <div className="p-6 px-0 overflow-scroll">
        <table className="w-full mt-4 text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Full Name <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
                </p>
              </th>
              <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Email <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
                </p>
              </th>
              <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Function <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
                </p>
              </th>
              <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Status <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
                </p>
              </th>
              <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">date de Creation <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
                </p>
              </th>
              <th className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">React Project</p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">Start date: 10 Dec 2023</p>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                  <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" alt="John Michael" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">John Michael</p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">john@creative-tim.com</p>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Manager</p>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">Organization</p>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-600 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20 opacity: 1">
                    <span className="">Completed</span>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">23/04/18</p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Angular Project</p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">Start date: 10 Dec 2023</p>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                  <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg" alt="Alexa Liras" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Alexa Liras</p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">alexa@creative-tim.com</p>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Programator</p>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">Developer</p>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-purple-600 uppercase rounded-md select-none whitespace-nowrap bg-purple-500/20 opacity: 1">
                    <span className="">active</span>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">23/04/18</p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Tailwind Project</p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">Start date: 10 Dec 2023</p>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                  <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg" alt="Laurent Perrier" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Laurent Perrier</p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">laurent@creative-tim.com</p>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Executive</p>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">Projects</p>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-yellow-600 uppercase rounded-md select-none whitespace-nowrap bg-yellow-500/20 opacity: 1">
                    <span className="">Scheduled
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">19/09/17</p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Laravel Project</p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">Start date: 10 Dec 2023</p>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                  <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg" alt="Michael Levi" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Michael Levi</p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">michael@creative-tim.com</p>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Programator</p>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">Developer</p>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-600 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20 opacity: 1">
                    <span className="">Completed</span>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">24/12/08</p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Astro Project</p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">Start date: 10 Dec 2023</p>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg" alt="Richard Gran" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Richard Gran</p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">richard@creative-tim.com</p>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">Manager</p>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">Executive</p>
                </div>
              </td>
              <td className="p-4">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-700 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20 opacity: 1">
                    <span className="">Pending</span>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">04/10/21</p>
              </td>
              <td className="p-4">
                <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className="relative pt-8 pb-6 mt-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-6/12">

            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AdminCrud