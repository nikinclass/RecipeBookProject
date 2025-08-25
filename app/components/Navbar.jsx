import { Link } from 'react-router';
import './Navbar.css';
import logo from '../images/Logo.png';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link to='/'>
        <img src={logo} alt='Logo' className='logo' />
        </Link>
      </div>

    <div className='navbar-links'>
      <Link to='/recipes'>Recipes </Link>
      <Link to='/profile'>Profile </Link>
      <Link to='/search'>Search </Link>
      <Link to='/favorites'>Favorites </Link>
      <Link to='/blog'>Blog </Link>
    </div>
    </nav>
  )  
};