import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import CSS
import './App.css';

// Import Components
import Nav from "./Components/Nav";

// Import Pages
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogInput from "./Pages/BlogInput";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/:id" element={<BlogInput />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
