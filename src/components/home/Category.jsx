// 카테고리별 지출 그래프

const Category = () => {
    return(
        <section className="bg-white mt-5 px-10 py-6 shadow-lg min-h-[400px] shadow-gray-100 rounded-xl">
        <div className="flex justify-between">
            <h2 className="font-semibold">카테고리별 지출</h2>
            <p className="text-gray-400">총5개</p>
        </div>

        <div>
            {/* 그래프 전체 */}
            <div className="flex items-center justify-between gap-7 mt-5">
                {/* 아이콘 */}
                <p className="w-3 h-3 bg-orange-400"></p>
                {/* 중앙부 */}
                <div className="flex-col w-full">
                    <div className="flex justify-between">
                    <p>쇼핑</p>
                    <p>77,000</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-xl h-2">
                        <div style={{width: "75%"}} className="bg-orange-400 h-full rounded-xl"></div>
                    </div>
                </div>
                {/* 퍼센트 */}
                <p>41%</p>
            </div>
        </div>
        </section>
    );
};

export default Category;