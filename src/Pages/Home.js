import { Link } from "react-router-dom";

// Import CSS
import "./Home.css";
import "../Components/Btn.css"

const Home = () => {
    return ( 
        <div className="Home">
            <header>
            </header>

            <div className="homeContent">
                <h1>Welcome to my simple Blog</h1>
                <button className="btn"><Link style={{textDecoration: 'none', color: '#219653'}} to="/blog">Got to articles</Link></button>
            </div>
        </div>
     );
}
 
export default Home;