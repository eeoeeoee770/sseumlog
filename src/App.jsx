// 라우터 설정
// 공통 레이아웃 적용
// 전역 설정
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
