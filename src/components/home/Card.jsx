// 카드 컴포넌트
import arrow from "../../assets/arrow.png";
import bg from "../../assets/bg.png";
import arrowDown from "../../assets/arrow-down.png";

const Card = () => {

  return (
    <div
      className="w-full min-h-[300px] rounded-xl mt-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`}}
    >
      <div className="backdrop-blur-[10px] rounded-xl w-full h-[300px] flex flex-col items-center justify-between px-10 py-6">
        {/* 날짜 */}
        <section className="w-full flex justify-between items-center">
          <button className="w-[35px] h-[35px] rounded-full flex cursor-pointer items-center bg-white/10 hover:bg-white/20">
            <img className="ml-2 scale-50" src={arrow} alt="메뉴 화살표" />
          </button>
          <p className="text-gray-300">2026년 4월</p>
          <button className="w-[35px] h-[35px] rounded-full scale-x-[-1] flex cursor-pointer items-center bg-white/10 hover:bg-white/20">
            <img className="ml-2 scale-50" src={arrow} alt="메뉴 화살표" />
          </button>
        </section>

        {/* 총 지출 */}
        <section className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400">이번 달 총 지출</p>
          <p className="text-4xl font-extrabold text-white">W188,100</p>
        </section>

        {/* 지난 달 비교 */}
        <section className="flex items-center gap-2">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-green-400/20">
            <img src={arrowDown} alt="화살표" />
          </div>
          <p className="font-semibold text-green-300">-50.9%</p>
          <p className="text-gray-400">지난 달 대비</p>
        </section>

        <section className="w-full flex justify-center gap-5">
            <div className="w-1/2 text-center rounded-xl py-3 bg-white/10">
              <p className="text-gray-400">지난 달</p>
              <p className="text-white font-extrabold">W383,200</p>
            </div>
            <div className="w-1/2 text-center rounded-xl py-3 bg-white/10">
              <p className="text-gray-400">거래 건수</p>
              <p className="text-white font-extrabold">10건</p>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
