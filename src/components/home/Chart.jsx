// 차트 부분
// chart.js 사용.
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

// chartJS 사용 기능 등록.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

const Chart = ({chartType}) => {
    
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales:
      chartType === "bar"
        ? {
            x: {
              grid: { display: false },
              border: { display: false },
            },
            y: {
              grid: {
                color: "#f0f0f0",
                drawTicks: false,
              },
            },
          }
        : {},
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
    },
  };

  const rawData = [100, 200, 300, 500, 0, 0, 0];
  const labels = ["1월", "2월", "3월", "4월", "5월", "6월", "7월"];

  const data = {
    labels: labels,
    datasets: [
      {
        data: rawData,
        backgroundColor:
          chartType === "bar"
            ? labels.map((date) =>
                date === "4월"
                  ? "rgba(54, 162, 235, 0.8)"
                  : "rgba(201, 203, 207, 0.5)",
              )
            : [
                "#FF6384",
                "#FF36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
                "#C9CBCF",
              ],
        borderWidth: 1,
        borderRadius: chartType === "bar" ? 7 : 0,
      },
    ],
  };

  return (
    <div className="w-full h-[250px] relative mt-7">
      {chartType === "bar" ? (
        <Bar options={options} data={data} key="bar-chart" />
      ) : (
        <Pie options={options} data={data} key="pie-chart" />
      )}
    </div>
  );
};

export default Chart;
