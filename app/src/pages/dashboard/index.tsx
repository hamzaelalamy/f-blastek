import React from 'react';
import { Chart } from 'chart.js';
import DashboardCard from '../../components/cards/dashboardCard';
import ChartIs from '../../components/charts/chartIs';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 p-4">
                <span></span>
                {/* textl */}
                <div className='flex flex-row gap-5'>
                    <DashboardCard title="First Card" number={10} percentage={2387237} color='green' />
                    <DashboardCard title="First Card" number={10} percentage={234234234} color='red' />
                    <DashboardCard title="First Card" number={10} percentage={24234} color='green' />
                    <DashboardCard title="First Card" number={10} percentage={22434} color='green' />
                </div>
                <ChartIs />
            </div>
            <div className="col-span-1 0 p-4 w-[320px] h-screen">
                <span>
                    <div className="w-full max-w-md p-4 ml-5 bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900">Latest Customers</h5>
                            <a href="#" className="text-sm font-medium text-[#20b486] hover:underline">
                                View all
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src="../../assets/img/akil.jpeg" alt="Neil image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                Neil Sims
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                            $320
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                Bonnie Green
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                            $3467
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                Michael Gough
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                            $67
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3 pb-0 sm:pt-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                Thomes Lean
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                            $2367
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Dashboard;
