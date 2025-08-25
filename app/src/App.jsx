import { useState } from 'react'
import Home from './Home.jsx'
import '../styles/App.css'
import Navbar from '../components/Navbar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  )
}

export default App
