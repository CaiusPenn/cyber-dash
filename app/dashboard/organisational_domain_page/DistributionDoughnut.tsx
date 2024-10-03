import React from "react";
import { Doughnut as DoughnutChart } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export const DistributionDoughnut = () => {
  const labels = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
  ];

  const dataValues = [24.95, 23.61, 19.96, 19.96, 11.52];

  const dynamicLabels = labels.map(
    (label, index) => `${label}: ${dataValues[index]}%`
  );

  const data = {
    labels: dynamicLabels,
    datasets: [
      {
        label: "Group Distribution",
        data: dataValues,
        backgroundColor: [
          "#3E7EF5",
          "#23B899",
          "#7366FF",
          "#5CB6A7",
          "#FE7C4B",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: "50%",
    plugins: {
      legend: {
        display: true,
        position: "right" as const, // Explicitly casting to the expected type
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
    },
  };
  console.log(options);
  console.log(dynamicLabels);
  return <DoughnutChart data={data} options={options} />;
};
