// 지출 추이 그래프.

// 이미지
import Chart from "./Chart";
import IconToggle from "./IconToggle";

import { useState } from "react";

const Graph = () => {

  // 차트 상태 (bar, pie).
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="bg-white mt-5 px-10 py-6 shadow-lg min-h-[400px] shadow-gray-100 rounded-xl">
      <IconToggle chartType={chartType} setChartType={setChartType}/>
      <Chart chartType={chartType}/>
    </div>
  );
};

export default Graph;
