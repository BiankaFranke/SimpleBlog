import { Link } from "react-router-dom";

// Import CSS
import './Nav.css';

const Nav = () => {
    return ( 
        <nav className="Navbar">
            <div className="navigation">
                <h2>My Life</h2>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                </ul>
            </div>
        </nav>
    );
}
 
export default Nav;