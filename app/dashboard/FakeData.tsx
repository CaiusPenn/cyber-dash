import { ScriptableContext } from "chart.js";

interface Props {
  color: string;
}

export const lineChartData = {
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
        // gradient.addColorStop(0, "#387DFF");
        // gradient.addColorStop(1, "#4E8BFF");
        // gradient.addColorStop(2, "#649AFF");
        // gradient.addColorStop(0, "#7AA8FF");
        // gradient.addColorStop(0, "#90B7FF");
        gradient.addColorStop(0, "#A7C5FF");
        // gradient.addColorStop(0.5, "#BDD4FF");
        gradient.addColorStop(0.4, "#D3E2FF");
        gradient.addColorStop(0.6, "#FFFFFF");
        return gradient;
      },

      borderColor: "#387DFF",
      fill: true, // Set to false if you don’t want to fill under the line
    },
  ],
};
