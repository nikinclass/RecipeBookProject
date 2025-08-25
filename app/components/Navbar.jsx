import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div>
      <Link to='/recipes'>Recipes</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/search'>Search</Link>
      <Link to='/favorites'>Favorites</Link>
      <Link to='/blog'>Blog</Link>
    </div>
  )  
};