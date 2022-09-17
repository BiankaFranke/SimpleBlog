// Import CSS
import "./Blog.css";

// Import Components
import BlogCard from "../Components/BlogCard";

// Import Data
import blogData from "../Components/BlogData";

const blog = () => {
    return (
        <div className="blogOverview">
            {blogData.map((blogData, index) => (
            <BlogCard
                key={"article" + index}
                title={blogData.title}
                date={blogData.published_date}
                author={blogData.author}
                description={blogData.description}
                img={blogData.img_url}
                id={blogData.id}
                />)
            )}
        </div>
    );
}
 
export default blog;