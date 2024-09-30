import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from "chart.js";

import { lineChartData } from "./FakeData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Props {
  color: string;
  gradient: string[];
}

export const LineGraph = ({ color, gradient }: Props) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Define your x-axis labels here
    datasets: [
      {
        label: "Sales", // This is the name that will appear in the legend
        data: [3, 4, 5, 6, 9, 20, 15, 18, 12, 40, 30, 20, 10, 50], // Your data points
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "#A7C5FF");
          gradient.addColorStop(0.4, "#D3E2FF");
          gradient.addColorStop(0.6, "#FFFFFF");
          return gradient;
        },

        borderColor: color,
        fill: true, // Set to false if you don’t want to fill under the line
      },
    ],
  };

  const options = {
    type: "line",
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0, // Remove points
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: "250px", height: "130px" }}>
      <Line options={options} data={data} />
    </div>
  );
};
