import React, { useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';

const ChartIs: React.FC = () => {
    // Define the data and options for the chart
    const data: ChartData<"line"> = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Users',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Profit',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
            }
        ]
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            }
        }
    };

    // Define the actions for the chart
    const actions = [
        {
            name: 'Randomize',
            handler(chart: Chart<"line", string[], unknown>) {
                chart.data.datasets.forEach(dataset => {
                    dataset.data = dataset.data.map(() => Math.random() * 100);
                });
                chart.update();
            }
        },
        {
            name: 'Add Dataset',
            handler(chart: Chart<"line", string[], unknown>) {
                const data = chart.data;
                const newDataset = {
                    label: 'New Dataset',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgb(75, 192, 192)',
                    data: [10, 20, 30, 40, 50, 60, 70],
                };
                chart.data.datasets.push(newDataset);
                chart.update();
            }
        },
        // Add other actions as needed
    ];

    // Use useEffect to handle chart initialization and cleanup
    useEffect(() => {
        const chartInstance = new Chart(document.getElementById('myChart'), {
            type: 'line',
            data: data,
            options: options,
            plugins: actions
        });

        // Cleanup function
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [data, options, actions]);

    return (
        <canvas id="myChart" className=" w-1/2"/>
    );
};

export default ChartIs;
