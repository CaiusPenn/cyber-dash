import { Line } from "react-chartjs-2";

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

export const MultipleLineGraph = () => {
  const options = {
    scales: {
      x: {
        grid: {
          color: "#EAEBF0", // Color of the x-axis gridlines
          borderDash: [5, 5], // Make the gridlines dashed (5px dash, 5px gap)
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
    ],
  };

  return (
    <div style={{ width: "95%", height: "275px" }}>
      <Line data={data} options={options} />
    </div>
  );
};
