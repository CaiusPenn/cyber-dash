import React from "react";
import { Doughnut as DoughnutChart } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Flex } from "@chakra-ui/react";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  h: number; // height in pixels
  w: number; // width in pixels
}

export const DoughnutCustom = () => {
  const labels = ["Project 1", "Project 2", "Project 3"];

  const dataValues = [24.95, 23.61, 19.96];

  const dynamicLabels = labels.map(
    (label, index) => `${label}: ${dataValues[index]}%`
  );
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const, // Explicitly casting to the expected type
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 30,
          color: "#334681",
          align: "start", // Align the legends to the top, stacking them
        },
      },
    },
  };
  const data = {
    labels: dynamicLabels,
    datasets: [
      {
        label: "Employee Stress Chart",
        data: dataValues,
        backgroundColor: ["#3E7EF5", "#23B899", "#FE7C4B"],
        hoverOffset: 4,
      },
    ],
  };

  return <DoughnutChart data={data} options={options} />;
};
