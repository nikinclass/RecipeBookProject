import Sidebar from '../components/Sidebar'
import { useState } from 'react'

export default function Home (){
  const [view, setView] = useState('default');

  return (
    <div>
      <Sidebar setter={setView}/>
      <h1>Home Page</h1>
    </div>
  )
};