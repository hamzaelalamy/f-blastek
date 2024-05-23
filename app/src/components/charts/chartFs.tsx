// import React, { useEffect } from "react";
// import { Bar } from 'react-chartjs-2';
// import { ChartData, ChartOptions } from 'chart.js';
// import Chart from 'chart.js/auto';

// const CustomBarChart: React.FC = () => {
//     // Define the data and options for the chart
//     const data: ChartData<"bar"> = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//             {
//                 label: 'Fully Rounded',
//                 data: [65, 59, 80, 81, 56, 55, 40],
//                 borderColor: 'rgb(255, 99, 132)',
//                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
//                 borderWidth: 2,
//                 borderRadius: Number.MAX_VALUE,
//                 borderSkipped: false,
//             },
//             {
//                 label: 'Custom Bar Chart',
//                 data: [28, 48, 40, 19, 86, 27, 90],
//                 borderColor: 'rgb(54, 162, 235)',
//                 backgroundColor: 'rgba(54, 162, 235, 0.5)',
//                 borderWidth: 2,
//                 borderRadius: 5,
//                 borderSkipped: false,
//             }

//         ]
//     };

//     const options: ChartOptions<"bar"> = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             title: {
//                 display: true,
//                 text: 'Chart.js Bar Chart'
//             }
//         }
//     };

//     // Define the actions for the chart
//     const actions = [
//         {
//             name: 'Randomize',
//             handler(chart) {
//                 chart.data.datasets.forEach(dataset => {
//                     dataset.data = dataset.data.map(() => Math.random() * 100);
//                 });
//                 chart.update();
//             }
//         },
//         // Add other actions as needed
//     ];

//     // Use useEffect to handle chart initialization and cleanup
//     useEffect(() => {
//         const chartInstance = new Chart(document.getElementById('myCustomBarChart'), {
//             type: 'bar',
//             data: data,
//             options: options,
//             plugins: actions
//         });

//         // Cleanup function
//         return () => {
//             if (chartInstance) {
//                 chartInstance.destroy();
//             }
//         };
//     }, [data, options, actions]);

//     return (
//             <canvas id="myCustomBarChart" className=" w-1/2" />
//     );
// };

// export default CustomBarChart;
