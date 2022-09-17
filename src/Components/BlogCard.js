import { Link } from "react-router-dom";

// Import Components
import Btn from "./Btn";

// Import CSS
import "./BlogCard.css";

const BlogCard = (props) => {
    return ( 
        <div className="BlogCard">
            <div className="grid-item">
                <div className="blogImg">
                    <Link to={`/${props.id}`}><img src={props.img} alt="Blog Img"></img></Link>
                </div>
                <div className="blogDescription">
                    <h2 className="title">{props.title}</h2>
                    <Link to={`/${props.id}`}><Btn /></Link>
                </div>
                {/* <Link to={`/${props.id}`}>Read more</Link> */}
            </div>
        </div>
     );
}
 
export default BlogCard;