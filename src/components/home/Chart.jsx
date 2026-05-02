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
import { useRef } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

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

const Chart = ({ chartType }) => {
  const chartRef = useRef(null);

  // 월별 추이 데이터.
  const rawData = [100, 200, 300, 500, 0, 0, 0];
  const dateLabels = ["1월", "2월", "3월", "4월", "5월", "6월", "7월"];

  // 카테고리 비율 데이터.
  const categoryDummy = [
    { id: 1, name: "쇼팡", pay: 100 },
    { id: 2, name: "통신", pay: 500 },
    { id: 3, name: "식비", pay: 300 },
    { id: 4, name: "문화/여가", pay: 400 },
    { id: 5, name: "교통", pay: 500 },
    { id: 6, name: "의료", pay: 600 },
  ];

  const categoryColors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#C9CBCF",
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    animation: {duration:500},
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

  const data = {
    labels:
      chartType === "bar" ? dateLabels : categoryDummy.map((data) => data.name),
    datasets: [
      {
        data:
          chartType === "bar" ? rawData : categoryDummy.map((data) => data.pay),
        backgroundColor:
          chartType === "bar"
            ? dateLabels.map((date) =>
                date === "4월"
                  ? "rgba(54, 162, 235, 0.8)"
                  : "rgba(201, 203, 207, 0.5)",
              )
            : categoryColors,
        borderWidth: 1,
        borderRadius: chartType === "bar" ? 7 : 0,
      },
    ],
  };

  const centerTextPlugin = {
    id: "centerText",
    afterDraw: (chart) => {
      if (chart.config.type === "doughnut") {
        const {
          ctx,
          chartArea: { width, height, top },
        } = chart;
        ctx.save();

        const centerX = width / 2;
        const centerY = height / 2 + top;

        const title = chart.activeLabel || "총 지출";
        const pay = chart.activepay || "188,100";

        ctx.font = "12px sans-serif";
        ctx.fillStyle = "#666";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${title}`, centerX, centerY - 15);

        ctx.font = "bold 16px sans-serif";
        ctx.fillStyle = "#333";
        ctx.fillText(`W${pay}`, centerX, centerY + 15);

        ctx.restore();
      }
    },
  };

  const handleMouseEnter = (index) => {
    const chart = chartRef.current;
    if (!chart) return;

    const newColors = categoryColors.map((color, i) => 
      i === index ? color : `${color}33` // 제외 회색. 
    );

    chart.data.datasets[0].backgroundColor = newColors;
    chart.activeLabel = categoryDummy[index].name;
    chart.activepay = categoryDummy[index].pay.toLocaleString();
    chart.update();
  };

  const handleMouseLeave = () => {
    const chart = chartRef.current;
    if(!chart) return;

    chart.data.datasets[0].backgroundColor = categoryColors;
    chart.activeLabel = null;
    chart.activepay = null;
    chart.update();
  };

  return (
    <div className="w-full h-[250px] mt-7">
      {chartType === "bar" ? (
        <>
          <Bar options={options} data={data} key="bar-chart" />
          <section className="flex gap-6 mt-4">
            <div className="flex items-center gap-2 text-gray-400">
              <p className="bg-blue-400 w-3 h-3 rounded-full"></p>
              <p>이번 달</p>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <p className="bg-gray-400 w-3 h-3 rounded-full"></p>
              <p>이전 달</p>
            </div>
          </section>
        </>
      ) : (
        <section className="flex items-center justify-between w-full h-full gap-7">
          <div className="flex-[1.2] h-full min-w-0">
            <Doughnut
              options={options}
              data={data}
              key={`${chartType}-doughnut`}
              ref={chartRef}
              plugins={[centerTextPlugin]}
            />
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-center gap-4">
            {categoryDummy.map((label, index) => (
              <div key={index} className="flex items-center gap-2" onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: categoryColors[index],
                  }}
                ></span>
                <p className="text-sm sm:text-lg cursor-pointer text-gray-600 truncate whitespace-nowrap">
                  {label.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Chart;
