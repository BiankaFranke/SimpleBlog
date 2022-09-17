import { Link } from "react-router-dom";

// Import CSS
import "./Home.css";
import "../Components/Btn.css"

// Import Image
import head from "../Img/lev2_2_js-reactjs_router_simple-blog.jpg";

const Home = () => {
    return ( 
        <div className="Home">
            <header>
                {/* <img src={head}></img> */}
            </header>

            <div className="homeContent">
                <h1>Welcome to my simple Blog</h1>
                <button className="btn"><Link to="/blog">Got to articles</Link></button>
            </div>
        </div>
     );
}
 
export default Home;