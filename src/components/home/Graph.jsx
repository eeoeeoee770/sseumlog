// 지출 추이 그래프.

// 이미지
import Chart from "./Chart";
import IconToggle from "./IconToggle";

const Graph = () => {
  return (
    <div className="bg-white mt-5 px-10 py-6 shadow-lg min-h-[300px] shadow-gray-100 rounded-xl">
      <section className="flex justify-between items-center">
        <p className="font-semibold">월별 지출 추이</p>
        <IconToggle />
      </section>
      <Chart />
      <section className="flex">
        <div> 
          <p></p>
          <p>이번 달</p>
        </div>
        <div>
          <p></p>
          <p>이전 달</p>
        </div>
      </section>
    </div>
  );
};

export default Graph;
