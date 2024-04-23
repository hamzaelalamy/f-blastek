import React from 'react'

function AdminCrud() {
  return (
    <div>
       
<div className="p-6 overflow-scroll px-0">
  <table className="mt-4 w-full min-w-max table-auto text-left">
    <thead>
      <tr>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
            <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Full Name <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Email <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Function <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Status <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">date de Creation <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Actions</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">React Project</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" alt="John Michael" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"/>
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">John Michael</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">john@creative-tim.com</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Manager</p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Organization</p>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="w-max">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md opacity: 1">
              <span className="">Completed</span>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">23/04/18</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
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
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Angular Project</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg" alt="Alexa Liras" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"/>
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Alexa Liras</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">alexa@creative-tim.com</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Programator</p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Developer</p>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="w-max">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-purple-500/20 text-purple-600 py-1 px-2 text-xs rounded-md opacity: 1">
              <span className="">active</span>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">23/04/18</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
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
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Tailwind Project</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg" alt="Laurent Perrier" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"/>
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Laurent Perrier</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">laurent@creative-tim.com</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Executive</p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Projects</p>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="w-max">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-yellow-500/20 text-yellow-600 py-1 px-2 text-xs rounded-md opacity: 1">
              <span className="">Scheduled	
</span>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">19/09/17</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
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
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Laravel Project</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg" alt="Michael Levi" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"/>
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Michael Levi</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">michael@creative-tim.com</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Programator</p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Developer</p>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="w-max">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md opacity: 1">
              <span className="">Completed</span>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">24/12/08</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
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
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Astro Project</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
            </div>
          </div>
        </td>
        <td className="p-4">
          <div className="flex items-center gap-3">
            <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg" alt="Richard Gran" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"/>
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Richard Gran</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">richard@creative-tim.com</p>
            </div>
          </div>
        </td>
        <td className="p-4">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Manager</p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Executive</p>
          </div>
        </td>
        <td className="p-4">
          <div className="w-max">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-700 py-1 px-2 text-xs rounded-md opacity: 1">
              <span className="">Pending</span>
            </div>
          </div>
        </td>
        <td className="p-4">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">04/10/21</p>
        </td>
        <td className="p-4">
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
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
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
       
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default AdminCrud