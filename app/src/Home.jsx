import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import '../styles/Home.css'

export default function Home (){
  const [view, setView] = useState('default');
  return (
    <div className='home'>
      <Sidebar setter={setView}/>
      <h1>Home Page</h1>
    </div>
  )
};