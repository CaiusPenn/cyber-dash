'use client'
import { Chart } from "chart.js/auto";
import { QueryResultRow } from "pg";
import { useEffect, useRef } from "react";

export function AdminChart({
  title,
  value,
}: {
  title: string;
  value: QueryResultRow;
}) {
    const adminData: Number[] = [];
    const dates: Number[] =[];
    for (let i=0;i<value.length;i++){
        adminData.push((value[i].admin_ratio));
        dates.push(value[i].to_char);
    }


  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'rgba(255, 255, 12, 1)');   // Starting color
      gradient.addColorStop(1, 'rgba(56, 125, 255, 0.3)'); // Fading color
      const myChart = new Chart(ctx, {
        type: 'line', 
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
              display:false,
            }
          },
          elements: {
              line: {
                borderJoinStyle: 'round',     // Rounded line join
                borderCapStyle: 'round',      // Rounded line ends
              },
            },
            plugins: {
              legend: {
                display: false,              // Disable the legend
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
      const dates: Number[] =[];
      for (let i=0;i<value.length;i++){
          appData.push((value[i].app_control_alerts));
          dates.push(value[i].to_char);
      }
      
  
    const chartRef = useRef<HTMLCanvasElement>(null);
  
    
    useEffect(() => {
        const ctx = chartRef.current?.getContext("2d");
  
        if (ctx) {
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(59, 25, 255, 1)');   // Starting color
          gradient.addColorStop(1, 'rgba(56, 125, 255, 0.3)'); // Fading color
          const myChart = new Chart(ctx, {
            type: 'line', 
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
                  display:false,
                }
              },
              elements: {
                  line: {
                    borderJoinStyle: 'round',     // Rounded line join
                    borderCapStyle: 'round',      // Rounded line ends
                  },
                },
                plugins: {
                  legend: {
                    display: false,              // Disable the legend
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
      const dates: Number[] =[];
      for (let i=0;i<value.length;i++){
          mfaData.push((value[i].mfa));
          dates.push(value[i].to_char);
      }
      
  
    const chartRef = useRef<HTMLCanvasElement>(null);

    
  
    useEffect(() => {
      const ctx = chartRef.current?.getContext("2d");

      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(59, 25, 255, 1)');   // Starting color
        gradient.addColorStop(1, 'rgba(56, 125, 255, 0.3)'); // Fading color
        const myChart = new Chart(ctx, {
          type: 'line', 
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
                display:false,
              }
            },
            elements: {
                line: {
                  borderJoinStyle: 'round',     // Rounded line join
                  borderCapStyle: 'round',      // Rounded line ends
                },
              },
              plugins: {
                legend: {
                  display: false,              // Disable the legend
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