import React, { useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';

const ChartIs: React.FC = () => {
    const generateMonthLabels = (count: number): string[] => {
        const labels: string[] = [];
        const currentDate = new Date();
        for (let i = count - 1; i >= 0; i--) {
            const date = new Date(currentDate);
            date.setMonth(date.getMonth() - i);
            labels.push(date.toLocaleString('default', { month: 'long' }));
        }
        return labels;
    };
    
    const labels: string[] = generateMonthLabels(7);
    const data: ChartData<"line"> = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const options: ChartOptions<"line"> = {
        scales: {
            y: {
                type: 'linear', // Specify the scale type explicitly
                beginAtZero: true
            }
        }
    };

    useEffect(() => {
        const chartInstance = new Chart(document.getElementById('myChart'), {
            type: 'line',
            data: data,
            options: options
        });

        // Cleanup function
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [data, options]);

    return (
        <>
            <canvas id="myChart" />
        </>
    );
};

export default ChartIs;
