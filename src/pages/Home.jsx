// 메인 페이지
import arrow from "../assets/arrow.png";
import bg from "../assets/bg.png";
import arrowDown from "../assets/arrow-down.png";

const Home = () => {
    return(
        <div className="w-full min-h-[300px] rounded-xl mt-6 bg-cover bg-center" style={{backgroundImage: `url(${bg})`}}>
            <div class="backdrop-blur-[3px] rounded-xl w-full h-[300px] flex flex-col items-center justify-between px-10 py-10">

            {/* 날짜 */}
            <section className="w-full flex justify-between items-center">
                <button className="w-[35px] h-[35px] rounded-full flex cursor-pointer items-center bg-white/10 hover:bg-white/20">
                    <img className="ml-2 scale-50" src={arrow} alt="메뉴 화살표"/>
                </button>
                <p className="text-gray-300">2026년 4월</p>
                <button className="w-[35px] h-[35px] rounded-full scale-x-[-1] flex cursor-pointer items-center bg-white/10 hover:bg-white/20">
                    <img className="ml-2 scale-50" src={arrow} alt="메뉴 화살표"/>
                </button>
            </section>

            {/* 총 지출 */}
            <section className="flex flex-col items-center gap-2">
                <p className="text-sm text-gray-400">이번 달 총 지출</p>
                <p className="text-4xl font-extrabold text-white">W188,100</p>
            </section>

            {/* 지난 달 비교 */}
            <section className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-green-400/20"><img src={arrowDown} alt="화살표"/></div>
                <p className="font-semibold text-green-300">-50.9%</p>
                <p className="text-gray-400">지난 달 대비</p>
            </section>

            <section>
                <div>지난달</div>
            </section>
            </div>
        </div>
    )
};

export default Home;