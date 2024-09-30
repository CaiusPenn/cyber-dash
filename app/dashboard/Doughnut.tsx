// import React from "react";
// import { Doughnut as DoughnutChart } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Flex } from "@chakra-ui/react";

// // Register the necessary Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// // Apply overrides specifically for doughnut charts
// ChartJS.overrides.doughnut = {
//   plugins: {
//     legend: {
//       display: true,
//       position: "bottom", // Ensure the legend is at the bottom
//       labels: {
//         boxWidth: 20,
//         padding: 20,
//         usePointStyle: true,
//       },
//     },
//   },
// };

// interface Props {
//   h: number; // height in pixels
//   w: number; // width in pixels
// }

// const Doughnut = ({ h, w }: Props) => {
//   const data = {
//     labels: ["Project 1", "Project 2", "Project 3"],
//     datasets: [
//       {
//         label: "Employee Stress Chart",
//         data: [85.9, 20.8, 14.9],
//         backgroundColor: ["#3E7EF5", "#23B899", "#FE7C4B"],
//         hoverOffset: 4,
//       },
//     ],
//   };

//   return (
//     <Flex justifyContent="center" alignItems="center" height={h} width={w}>
//       <DoughnutChart data={data} />
//     </Flex>
//   );
// };
