import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

const CustomChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null); // Ref for the chart canvas element

  useEffect(() => {
    let chartInstance: Chart | null = null;

    // Function to create or update the chart
    const renderChart = () => {
      if (chartRef.current) {
        // Ensure that any existing chart instance is destroyed before creating a new one
        if (chartInstance) {
          chartInstance.destroy();
        }

        // Create a new chart instance
        chartInstance = new Chart(chartRef.current.getContext('2d'), {
          type: 'line',
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
              },
              {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
              }
            ]
          },
        });
      }
    };

    renderChart(); // Initial rendering of the chart

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return <canvas ref={chartRef} />;
};

export default CustomChart;
