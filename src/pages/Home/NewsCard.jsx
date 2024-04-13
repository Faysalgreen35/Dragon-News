import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
 

const NewsCard = ({ news }) => {
    const { title, image_url, details, id } = news;

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
        
                   
                {typeof details === 'string' && details.length > 200 ? (
                    <p>
                        {details.slice(0, 200)}
                        <Link className="text-blue-500" to={`/news/${id}`}>Read More
                        
                        </Link>
                    </p>
                ) : (
                    <p>{details}</p>
                )}
                 
            </div>
        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    news: PropTypes.object,
}