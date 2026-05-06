// 메인 페이지

import Card from "../components/home/Card";
import Category from "../components/home/Category";
import Graph from "../components/home/Graph";
import History from "../components/home/History";

const Home = () => {
    return(
        <>
        <Card />
        <Graph />
        <Category />
        <History />
        </>
    )
};

export default Home;