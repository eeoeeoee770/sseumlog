// 지출 추이 그래프

import graph from "../../assets/graph.png";
import pie from "../../assets/pie.png";

const Graph = () => {
    return(
        <div className="bg-white mt-5 px-10 py-6 shadow-lg min-h-[300px] shadow-gray-100 rounded-xl">
            <section className="flex justify-between">
                <p>월별 지출 추이</p>
                <div>
                    <img src={graph} />
                    <img src={pie} />
                </div>
            </section>
            <section>그래프 부분</section>
            <section>이번달 이전 달</section>
        </div>
    );
};

export default Graph;