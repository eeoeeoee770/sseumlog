// 아이콘 토글.
// framer-motion 라이브러리 사용.

import { useState } from "react";
import { motion } from "framer-motion";

// 이미지
import graph from "../../assets/graph.png";
import pie from "../../assets/pie.png";

const IconToggle = () => {
  const [activeTab, setActiveTab] = useState("graph");

  const tabs = [
    { id: "graph", icon: graph, alt: "그래프 아이콘" },
    { id: "pie", icon: pie, alt: "파이 아이콘" },
  ];

  return (
    <div className="flex bg-gray-300 py-1 px-1 rounded-3xl gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className="relative z-10 p-2"
        >
          <img src={tab.icon} alt={tab.alt} />
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-white rounded-full -z-10"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default IconToggle;
