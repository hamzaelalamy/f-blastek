import React from 'react';
import DashboardCards from '../../components/cards/dashboardCard';
import DashboardCharts from '../../components/charts/dashboardCharts';

function index() {
    return (
        <div>
            <DashboardCards/>
            <DashboardCharts/>
        </div>
    );
}

export default index;
