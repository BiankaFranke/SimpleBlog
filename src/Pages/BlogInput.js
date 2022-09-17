import { useParams } from "react-router-dom";

// Import Data
import blogData from "../Components/BlogData";

// Import CSS
import "./BlogInput.css";

const BlogInput = () => {
    let params = useParams();
    let input = blogData[params.id];
    return (
        <div className="blogPost">
            <div className="bigBlogImg">
                <img src={input.img_url} alt="Blog img"></img>
            </div>
            <div className="postHead">
                <h2>{input.title}</h2>
                <p>{input.published_date}</p>
            </div>

            <div className="blogContent">
                <p className="content">{input.description}</p>
                <p className="author">By {input.author}</p>
            </div>
      </div>
    );
}
 
export default BlogInput;