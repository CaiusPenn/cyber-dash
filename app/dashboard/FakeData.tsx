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
      data: [3, 4, 5, 6, 9, 20, 3, 8, 12, 40, 30, 20, 10, 50], // Your data points
      backgroundColor: "#387DFF",
      borderColor: "#387DFF",
      fill: false, // Set to false if you don’t want to fill under the line
    },
  ],
};
