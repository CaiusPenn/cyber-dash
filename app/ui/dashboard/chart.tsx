"use client";
import { Box } from "@chakra-ui/react";
import { Chart } from "chart.js/auto";
import { getRandomValues } from "crypto";
import { QueryResultRow } from "pg";
import { useEffect, useRef } from "react";
import { number } from "zod";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function colorDecide(value: any, threshold: any) {
  if (value > threshold) {
    return "#23cf1d";
  }
  return "#c71606";
}

export function AdminChart({
  title,
  value,
}: {
  title: string;
  value: QueryResultRow;
}) {
  const adminData: Number[] = [];
  const dates: Number[] = [];
  for (let i = 0; i < value.length; i++) {
    adminData.push(value[i].admin_ratio);
    dates.push(value[i].to_char);
  }

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(255, 255, 12, 1)"); // Starting color
      gradient.addColorStop(0.5, "rgba(56, 125, 255, 0.3)"); // Fading color
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Number of app control alerts",
              data: adminData,
              borderColor: gradient,
              borderWidth: 3,
              tension: 0.4,
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
            x: {
              display: false,
            },
          },
          elements: {
            line: {
              borderJoinStyle: "round", // Rounded line join
              borderCapStyle: "round", // Rounded line ends
            },
          },
          plugins: {
            legend: {
              display: false, // Disable the legend
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [value]);

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-xs font-medium">{title}</h3>
      </div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}

export function PolicyChart({
  title,
  value,
}: {
  title: string;
  value: QueryResultRow;
}) {
  const policyData: Number[] = [];
  for (let i = 0; i < value.length; i++) {
    policyData.push(value[i].violations);
  }
  const chartRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(128, 255, 202, 1)"); // Starting color
      gradient.addColorStop(0.5, "rgba(255, 189, 128, 0.3)"); // Fading color
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [2, 3, 5, 6, 7],
          datasets: [
            {
              label: "Number of policy violations",
              data: policyData,
              borderColor: gradient,
              borderWidth: 3,
              tension: 0.4,
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
            x: {
              display: false,
            },
          },
          elements: {
            line: {
              borderJoinStyle: "round", // Rounded line join
              borderCapStyle: "round", // Rounded line ends
            },
          },
          plugins: {
            legend: {
              display: false, // Disable the legend
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [value]);

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-xs font-medium">{title}</h3>
      </div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}

export function AppChart({
  title,
  value,
}: {
  title: string;
  value: QueryResultRow;
}) {
  const appData: Number[] = [];
  const dates: Number[] = [];
  for (let i = 0; i < value.length; i++) {
    appData.push(value[i].app_control_alerts);
    dates.push(value[i].to_char);
  }

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
          labels: dates,
          datasets: [
            {
              label: "Number of app control alerts",
              data: appData,
              borderColor: gradient,
              borderWidth: 3,
              tension: 0.4,
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
            x: {
              display: false,
            },
          },
          elements: {
            line: {
              borderJoinStyle: "round", // Rounded line join
              borderCapStyle: "round", // Rounded line ends
            },
          },
          plugins: {
            legend: {
              display: false, // Disable the legend
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [value]);

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}

export function MfaChart({
  title,
  value,
}: {
  title: string;
  value: QueryResultRow;
}) {
  const mfaData: Number[] = [];
  const dates: Number[] = [];
  for (let i = 0; i < value.length; i++) {
    mfaData.push(value[i].mfa);
    dates.push(value[i].to_char);
  }

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(59, 25, 255, 1)"); // Starting color
      gradient.addColorStop(0.5, "rgba(56, 125, 255, 0.3)"); // Fading color
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Number of app control alerts",
              data: mfaData,
              borderColor: gradient,
              borderWidth: 3,
              tension: 0.4,
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
            x: {
              display: false,
            },
          },
          elements: {
            line: {
              borderJoinStyle: "round", // Rounded line join
              borderCapStyle: "round", // Rounded line ends
            },
          },
          plugins: {
            legend: {
              display: false, // Disable the legend
            },
          },
          
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [value]);

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}

export function IncidentChart({
  title,
  value,
}: {
  title: string;
  value: QueryResultRow;
}) {
  const incidentData: Number[] = [];
  const dates: Number[] = [];
  for (let i = 0; i < value.length; i++) {
    incidentData.push(value[i].severity);
    dates.push(value[i].time);
  }

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(21, 60, 189, 1)"); // Starting color
      gradient.addColorStop(0.5, "rgba(90, 220, 237, 0.3)"); // Fading color
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Severity of Incidents by date",
              data: incidentData,
              borderColor: gradient,
              borderWidth: 3,
              tension: 0.4,
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
            x: {
              display: false,
            },
          },
          elements: {
            line: {
              borderJoinStyle: "round", // Rounded line join
              borderCapStyle: "round", // Rounded line ends
            },
          },
          plugins: {
            legend: {
              display: false, // Disable the legend
            },
          },
          maintainAspectRatio: false, // Allow graph to scale with container
          responsive: true, // Make the chart responsive
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [value]);

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}

export function IncidentSeverityChart({ value }: { value: QueryResultRow }) {
  const severityData: Number[] = [];
  const count: Number[] = [];
  for (let i = 0; i < value.length; i++) {
    severityData.push(value[i].severity);
    count.push(value[i].count);
  }

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    const colors = count.map((value) => {
      if (Number(value) > 5) {
        return "rgba(255, 99, 132, 1)";
      } else if (Number(value) < 2) {
        return "rgba(75, 192, 192, 1)";
      } else {
        return "rgba(255, 247, 5, 1)";
      }
    });

    if (ctx) {
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: severityData,
          datasets: [
            {
              label: "Incidents by Severity",
              data: count,
              backgroundColor: colors,
              borderWidth: 0,
              borderRadius: 5,
              barThickness: 40,
            },
          ],
        },
        options: {
          scales: {
            y: {
              title: { display: true, text: "Count of Incidents" },
              beginAtZero: true, // Start the y-axis at 0
              min: 0, // Minimum value on the Y-axis
              max: 7, // Maximum value on the Y-axis (adjust as needed)
              ticks: {
                stepSize: 1, // Define the step size between tick marks
              },
              grid: {
                display: false,
              },
            },
            x: {
              title: {
                display: true, // Set to true to display the x-axis label
                text: "Severity of Incidents",
              },
              type: "category", // Category scale (default for bar charts)
              ticks: {
                autoSkip: false, // If true, automatically skips labels to avoid overlap
              },
              grid: {
                display: false, // Hide grid lines for the X-axis (optional)
              },
            },
          },
          plugins: {
            legend: {
              display: true,
            },
          },
          maintainAspectRatio: false, // Allow graph to scale with container
          responsive: true, // Make the chart responsive
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [value]);

  return <canvas ref={chartRef} id="myChart"></canvas>;
}

export function IncidentCountChart({
  title,
  value,
}: {
  title: string;
  value: QueryResultRow;
}) {
  const countData: Number[] = [];
  const dates: Number[] = [];
  for (let i = 0; i < value.length; i++) {
    countData.push(value[i].count);
    dates.push(value[i].time);
  }

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(35, 140, 67, 1)"); // Starting color
      gradient.addColorStop(0.5, "rgba(66, 245, 120, 0.3)"); // Fading color
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Severity of Incidents by date",
              data: countData,
              borderColor: gradient,
              borderWidth: 3,
              tension: 0.4,
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
            x: {
              display: false,
            },
          },
          elements: {
            line: {
              borderJoinStyle: "round", // Rounded line join
              borderCapStyle: "round", // Rounded line ends
            },
          },
          plugins: {
            legend: {
              display: false, // Disable the legend
            },
          },
          maintainAspectRatio: false, // Allow graph to scale with container
          responsive: true, // Make the chart responsive
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [value]);

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}

export function CategoryChart({
  title,
  value,
}: {
  title: string;
  value: Map<String, Number>;
}) {
  const countData: Number[] = [];
  const cat: String[] = [];
  for (const x of value.values()) {
    countData.push(x);
  }
  for (const x of value.keys()) {
    cat.push(x);
  }

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: cat,
          datasets: [
            {
              label: "Category Scores",
              data: countData,
              backgroundColor: [
                "rgb(255, 0, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 0)",
                "rgb(247, 133, 0)",
                "rgb(128, 0, 201)",
                "rgb(0, 213, 255)",
                "rgb(0, 255, 64)",
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
            x: {
              display: false,
            },
          },
          elements: {
            line: {
              borderJoinStyle: "round", // Rounded line join
              borderCapStyle: "round", // Rounded line ends
            },
          },
          plugins: {
            legend: {
              display: false, // Disable the legend
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [value]);

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}

export function StressChart({
  title,
  value,
}: {
  title: string;
  value: Map<String, Number>;
}) {
  const stressData: Number[] = [];
  const dept: String[] = [];
  for (const x of value.values()) {
    stressData.push(x);
  }
  for (const x of value.keys()) {
    dept.push(x);
  }

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: dept,
          datasets: [
            {
              label: "Category Scores",
              data: stressData,
              backgroundColor: [
                "rgb(255, 0, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 0)",
                "rgb(247, 133, 0)",
                "rgb(128, 0, 201)",
                "rgb(0, 213, 255)",
                "rgb(0, 255, 64)",
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
            x: {
              display: false,
            },
          },
          elements: {
            line: {
              borderJoinStyle: "round", // Rounded line join
              borderCapStyle: "round", // Rounded line ends
            },
          },
          plugins: {
            legend: {
              display: false, // Disable the legend
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [value]);

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}

export function GaugeChart({ value, gValue }: { value: any; gValue: any }) {
  const gaugeValue = value; // Value for the gauge (percentage or actual value)
  const maxValue = gValue; // Max value for the gauge (100% or max value)

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "Value ",
              data: [value, gValue - value],
              backgroundColor: ["rgb(15, 120, 11)", "rgb(255,255,255,0.0)"],
              circumference: 180,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
            x: {
              display: false,
            },
          },
          elements: {
            line: {},
          },
          plugins: {
            legend: {
              display: false, // Disable the legend
            },
            tooltip: {
              enabled: false,
            }
          },
          rotation: 270,
          layout: {
            padding: 0,
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [value]);

  return <canvas ref={chartRef} id="myChart"></canvas>;
}
