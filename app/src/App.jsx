import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AppContext from './AppContext.jsx';

import Home from "./Home.jsx";
import Recipes from "./Recipes.jsx";
import Profile from "./Profile.jsx";
import Search from "./Search.jsx";
import Favorites from "./Favorites.jsx";
import Blog from "./Blog.jsx";
import '../styles/App.css'
import Navbar from '../components/Navbar.jsx'
import Account from "../components/Account.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/recipes') 
    .then(response => {
      if(response.status != 200) {
        throw new Error ('unable to fetch resources')
      } else {
        return response.json();
      }
    })
    .then()
  }, [])

  return (
    <AppContext.Provider value={{recipes:recipeList}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Account />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
