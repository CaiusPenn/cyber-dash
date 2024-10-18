'use client'
import React from "react";
import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const colorScheme = ["#387DFF", "#EAD656", "#FE7C4B", "#23B899"];

interface Props {
  w: string;
  h: string;
}


export function MultiLineChart({
  title,
}: {
  title: string;
}) {
 
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(128, 255, 202, 1)"); // Starting color
      gradient.addColorStop(0.5, "rgba(69, 146, 255, 0.3)"); // Fading color
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "Dataset 1",
              data: [10, 80, 70, 40, 30, 20, 50],
              borderColor: "#eb7d34",
              fill: false,
              tension: 0.4,
            },
            {
              label: "Dataset 2",
              data: [20, 30, 80, 70, 20, 40, 20],
              borderColor: "#3a8709",
              fill: false,
              tension: 0.4,
            },
            {
              label: "Dataset 3",
              data: [10, 20, 20, 60, 20, 30, 10],
              borderColor: "#0e0987",
              fill: false,
              tension: 0.4,
            },
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                drawOnChartArea: true, // Ensure grid lines are drawn
                color: "#EAEBF0", // Gridline color
              },
            },
            y: {
              grid: {
                color: "#EAEBF0", // Color of the y-axis gridlines
              },
              ticks: { stepSize: 30 }, // Control the step size of the y-axis labels
            },
          },
          elements: {
            point: {
              radius: 3, // Control the size of the points on the chart
            },
          },
          plugins: {
            legend: {
              display: false, // Show the legend
            },
          },
          maintainAspectRatio: false, // Allow graph to scale with container
          responsive: true, // Make the chart responsive
        }
      });

      return () => {
        myChart.destroy();
      };
    }
  });

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm h-100 w-100">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      
      <canvas ref={chartRef} id="myChart"></canvas>
      </div>
    </div>
  );
}


export function MultiLineChart2({
  title,
}: {
  title: string;
}) {
 
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(128, 255, 202, 1)"); // Starting color
      gradient.addColorStop(0.5, "rgba(69, 146, 255, 0.3)"); // Fading color
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "Dataset 1",
              data: [30, 100, 70, 40, 30, 100, 50],
              borderColor: colorScheme[0],
              fill: false,
            },
            {
              label: "Dataset 2",
              data: [50, 30, 80, 90, 20, 40, 100],
              borderColor: colorScheme[1],
              fill: false,
            },
            {
              label: "Dataset 3",
              data: [80, 30, 40, 50, 70, 40, 100],
              borderColor: colorScheme[2],
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                drawOnChartArea: true, // Ensure grid lines are drawn
                color: "#EAEBF0", // Gridline color
              },
            },
            y: {
              grid: {
                color: "#EAEBF0", // Color of the y-axis gridlines
              },
              ticks: { stepSize: 30 }, // Control the step size of the y-axis labels
            },
          },
          elements: {
            point: {
              radius: 3, // Control the size of the points on the chart
            },
          },
          plugins: {
            legend: {
              display: false, // Show the legend
            },
          },
          maintainAspectRatio: false, // Allow graph to scale with container
          responsive: true, // Make the chart responsive
        }
      });

      return () => {
        myChart.destroy();
      };
    }
  });

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm h-100 w-100">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}
