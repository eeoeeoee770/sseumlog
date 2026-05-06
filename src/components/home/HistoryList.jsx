const HistoryList = ({filteredData}) => {

    // 요일 별 데이터 그룹화.
    // reduce : 데이터의 구조를 새로 짬. 배열 - 객체 / 숫자 합치기 등.
    const groupedData = filteredData.reduce((acc, item) => {
        // acc : 현재까지 쌓인 바구니 . 객체
        // item : 확인중인 아이템

        // 만약 바구니에 날짜가 없으면
        // 빈 배열로 전환.
        if(!acc[item.day]) acc[item.day] = [];

        // 해당 날짜 칸에 아이템 넣기.
        acc[item.day].push(item);
        return acc;
    }, {}); // 초기 바구니 모양.

    return(
        <div className="mt-6">
            {/* 객체는 map 바로 못써서 Object.keys 씀. */}
            {Object.keys(groupedData).map((day) => (
                <div key={day} className="mb-8">
                    <h3 className="bg-gray-100 w-full">{day}</h3>

                    {/* 날짜별 항목 */}
                    <ul>
                        {groupedData[day].map((item, index) => (
                            <li key={index}>
                                <p>{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default HistoryList;