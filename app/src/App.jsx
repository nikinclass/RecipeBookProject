import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Home.jsx";
import Recipes from "./Recipes.jsx";
import Profile from "./Profile.jsx";
import Search from "./Search.jsx";
import Favorites from "./Favorites.jsx";
import Blog from "./Blog.jsx";
import '../styles/App.css'
import Navbar from '../components/Navbar.jsx'



function App() {
  const [count, setCount] = useState(0);

  return (

    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
