// 차트 부분
// chart.js 사용.
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: { display: false },
            border: { display: false }
        },
        y: {
            grid: {
                color: '#f0f0f0',
                drawTicks: false
            },
        },
    },
    plugins: {
        legend: {
            position: 'top',
            display: false
        },
    },
};

const rawData = [100, 200, 300, 500, 600, 800, 422];
const labels = ["1월", "2월", "3월", "4월", "5월", "6월", "7월"];

const data = {
    labels: labels,
    datasets: [
        {
            data: rawData,
            backgroundColor: labels.map((date) => 
                date === "4월" ? 'rgba(54, 162, 235, 0.8)' : 'rgba(201, 203, 207, 0.5)' 
            ),
            borderWidth: 1,
            borderRadius: 7
        }
    ]
};

const Chart = () => {
    return(
        <div className="w-full h-[250px] relative mt-7">
            <Bar options={options} data={data}/>
        </div>
    );
};

export default Chart;