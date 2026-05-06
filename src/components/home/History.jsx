// 거래 내역

import { useState } from "react";
import HistorySearchBar from "./HistorySearchBar";
import HistoryList from "./HistoryList";

const History = () => {

    const testData = [
        {id: 1, title: "스타벅스", subTitle: "식비 . 아메리카노" , pay: "6,500", day: "4월 5일 (일)"},
        {id: 2, title: "쿠팡", subTitle: "쇼핑", pay: "45,000", day: "4월 5일 (일)"},
        {id: 3, title: "올리브영", subTitle: "쇼핑", pay: "32,000", day: "4월 4일 (토)"},
        {id: 4, title: "지하철", subTitle: "교통", pay: "1,600", day: "4월 4일 (토)"},
        {id: 5, title: "맥도날드", subTitle: "식비", pay: "9,500", day: "4월 3일 (금)"},
    ];

    const [filteredData, setFilteredData] = useState(testData);

    const handleSearch = (keyword) => {
        const filtered = testData.filter((item) => item.title.includes(keyword));
        setFilteredData(filtered);
    };

    return(
        <div className="bg-white mt-5 px-10 py-6 shadow-lg min-h-[400px] shadow-gray-100 rounded-xl">
        <div className="flex justify-between">
            <h2 className="font-semibold">거래 내역</h2>
            <p className="text-gray-400">9건</p>
        </div>

        <HistorySearchBar onSearch={handleSearch}/>

        <HistoryList filteredData={filteredData}/>
        </div>
    );
};

export default History;