// 헤더
import logo from "../../assets/logo.png";
import alert from "../../assets/alert.png";

const Header = () => {
    return(
        <header className="header w-full px-6 py-3 flex justify-between bg-amber-200">
            <div className="logo w-[100px] flex items-center justify-between cursor-pointer rounded-xl">
                <logo tabIndex={0} className="w-[45px] h-[45px] bg-black flex justify-center items-center rounded-xl">
                    <img src={logo} alt="로고" className="size-7"/>
                </logo>
                <h1 tabIndex={0} className="font-semibold">씀씀이</h1>
            </div>

            <div className="header-menu flex items-center">
                <div tabIndex={0}>
                    <img src={alert} alt="알림 아이콘" />
                </div>
                <p>김쏠쏠</p>
                <p>로그아웃</p>
            </div>
        </header>
    );
};

export default Header;