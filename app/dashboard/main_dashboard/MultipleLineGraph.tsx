import React from "react";
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
import { position } from "@chakra-ui/react";

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

export const MultipleLineGraph = () => {
  const options = {
    scales: {
      x: {
        grid: {
          drawOnChartArea: true, // Ensure grid lines are drawn
          drawBorder: true, // Draw the border around the chart
          borderDash: [5, 5], // Apply dashed lines
          color: "#EAEBF0", // Gridline color
        },
      },
      y: {
        grid: {
          color: "#EAEBF0", // Color of the y-axis gridlines
          borderDash: [5, 5], // Make the y-axis gridlines dashed as well
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
        display: true, // Show the legend
        position: "bottom" as const,
        labels: {
          usePointStyle: true, // Use circle style for legend markers
          boxWidth: 10, // Adjust the size of the legend color markers
          padding: 20, // Add padding between labels
          generateLabels: (chart: { data: { datasets: any } }) => {
            const datasets = chart.data.datasets;
            return datasets.map(
              (dataset: { label: any; borderColor: any }, i: any) => ({
                text: dataset.label,
                fillStyle: dataset.borderColor, // Set the legend marker to use the same color as the dataset's border
                strokeStyle: dataset.borderColor, // Ensure it's the same as the dataset's border color
                pointStyle: "circle", // Use circles in the legend
                datasetIndex: i, // Keep track of the dataset
              })
            );
          },
        },
      },
    },
    maintainAspectRatio: false, // Allow graph to scale with container
    responsive: true, // Make the chart responsive
  };

  const data = {
    labels: labels,
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
      {
        label: "Dataset 4",
        data: [10, 20, 30, 40, 70, 40, 80],
        borderColor: colorScheme[3],
        fill: false,
      },
    ],
  };

  return (
    <div style={{ width: "95%", height: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};
