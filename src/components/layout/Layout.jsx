// 레이아웃
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Header />

      {/* 페이지 영역 */}
      <main className="px-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
