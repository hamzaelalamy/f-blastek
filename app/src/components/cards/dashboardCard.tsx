import React from 'react';

interface DashboardCardProps {
  title: string;
  number: number;
  percentage: number;
  color: string
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, number, percentage , color }) => {
  return (
    <div className=' bg-gray-100 border border-gray-200 rounded-lg shadow p-7 flex flex-col items-center justify-center'>
      <h2>{title}</h2>
      <p className='font-bold'>{number}</p>
      <p style={{ color: color }}className='font-bold'>{percentage}%</p>
    </div>
  );
};

export default DashboardCard;
