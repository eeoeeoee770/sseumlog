// 지출 추이 그래프.

// 이미지
import Chart from "./Chart";
import IconToggle from "./IconToggle";

import { useState } from "react";

const Graph = () => {

  // 차트 상태 (bar, pie).
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="bg-white mt-5 px-10 py-6 shadow-lg min-h-[300px] shadow-gray-100 rounded-xl">
      <IconToggle chartType={chartType} setChartType={setChartType}/>
      <Chart chartType={chartType}/>

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

    </div>
  );
};

export default Graph;
