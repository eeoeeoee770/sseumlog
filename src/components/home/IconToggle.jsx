// 아이콘 토글.
// framer-motion 라이브러리 사용.
import { motion } from "framer-motion";

// 이미지
import graph from "../../assets/graph.png";
import pie from "../../assets/pie.png";

const IconToggle = ({chartType, setChartType}) => {

  const tabs = [
    { id: "bar", icon: graph, alt: "그래프 아이콘" },
    { id: "pie", icon: pie, alt: "파이 아이콘" },
  ];

  return (
    <section className="flex justify-between items-center">
    {chartType === "bar" ? (<p className="font-semibold">월별 지출 추이</p>) : (<p className="font-semibold">카테고리 비율</p>)}
      <div className="flex bg-gray-300 py-1 px-1 rounded-3xl gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setChartType(tab.id)}
          className="relative z-10 p-2"
        >
          <img className="w-4" src={tab.icon} alt={tab.alt} />
          {chartType === tab.id && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-white rounded-full -z-10"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
    </section>
  );
};

export default IconToggle;
