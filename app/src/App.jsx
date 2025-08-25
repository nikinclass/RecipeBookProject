import {Routes, Route } from "react-router";
import { useeffect, useState } from 'react';
import Home from './Home.jsx';
// import Recipes from './Recipes.jsx';
// import Profile from './Profile.jsx';
// import Search from './Search.jsx';
// import Search from './Search.jsx';
// import Favorites from './Favorites.jsx'
// import Blog from './Blog.jsx'
import '../styles/App.css';

import "../styles/App.css";
import { useState } from 'react'
import Home from './Home.jsx'
import '../styles/App.css'
import Navbar from '../components/Navbar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/" element={<Recipes />} /> 
        <Route path="/" element={<Profile />} />
        <Route path="/" element={< Search/>} />
        <Route path="/" element={<Favorites />} />
        <Route path="/" element={<Blog />} />
      </Routes>
      <Navbar></Navbar>
      <Home></Home>
    </>
  )
}

export default App
