import React from 'react';
import DashboardCard from '../../components/cards/dashboardCard';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2  p-4">
        <span></span>
        {/* textl */}
        <div className='flex flex-row gap-5'>
        <DashboardCard title="First Card" number={10} percentage={2387237} color='green' />
        <DashboardCard title="First Card" number={10} percentage={234234234} color='red' />
        <DashboardCard title="First Card" number={10} percentage={24234} color='green'/>
        <DashboardCard title="First Card" number={10} percentage={22434} color='green'/>
        </div>
      </div>
      <div className="col-span-1 0 p-4 w-[320px] h-screen">
        <span>test component</span>
      </div>
    </div>
  );
};

export default Dashboard;
