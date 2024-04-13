
import { useLoaderData, useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/navbar/Header/Header";
import Navbar from "../Shared/navbar/Navbar";

const News = () => {
    const news = useLoaderData();
    // console.log('news of ', news)
    const { id } = useParams();

    // const intNewsId = parseInt(id);
    // console.log('news intNewsId of ', intNewsId)

    const signlenews = news.find(signlenews => signlenews.id === id);

    // console.log(signlenews);

    return (
        <div>
            <Header />
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={signlenews.image_url} alt="News" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{signlenews.title}</h2>
                                <p>{signlenews.details}</p>
                            </div>
                        </div>

                    
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default News;
