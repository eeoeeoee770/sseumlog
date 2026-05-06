// 헤더
import logo from "../../assets/logo.png";
import alert from "../../assets/alert.png";
import user from "../../assets/user.png";
import logout from "../../assets/logout.png";

const Header = () => {
  return (
    <header className="header top-0 left-0 w-full px-3 py-3 flex fixed z-10 justify-between bg-white/80 backdrop-blur-sm">
      <div className="logo w-[100px] flex items-center justify-between cursor-pointer rounded-xl">
        <div
          tabIndex={0}
          className="w-[45px] h-[45px] bg-black flex justify-center items-center rounded-xl"
        >
          <img src={logo} alt="로고" className="size-7" />
        </div>
        <h1 tabIndex={0} className="font-semibold">
          씀씀이
        </h1>
      </div>

      <div className="header-menu flex items-center gap-5">
        <div tabIndex={0} className="cursor-pointer relative">
          <div className="text-[10px] absolute left-3 bottom-3 flex items-center justify-center text-white font-semibold w-5 h-5 rounded-full bg-red-700">6</div>
          <img src={alert} alt="알림 아이콘" />
        </div>
        <div className="flex items-center gap-2">
          <img className="bg-slate-200 p-2 rounded-full" src={user} alt="유저 아이콘" />
          <p>김씀씀</p>
        </div>
        <div tabIndex={0} className="cursor-pointer">
          <img src={logout} alt="로그아웃" />
        </div>
      </div>
    </header>
  );
};

export default Header;
