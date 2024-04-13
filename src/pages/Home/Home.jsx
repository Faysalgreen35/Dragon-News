import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/navbar/Header/Header";
import Navbar from "../Shared/navbar/Navbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news);

    return (
        <div className="mx-auto max-w-6xl">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
 
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6"> 
           <div className="border">
                <LeftSideNav></LeftSideNav>
            </div>

            {/* news container  */}
            <div className="col-span-2 border">
                {
                    news.map(aNews => <NewsCard
                    
                    key={aNews._id}
                    news = {aNews}
                    >

                    </NewsCard>)
                }
                
                </div>
            <div className="border"> 
                <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default Home;