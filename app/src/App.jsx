import { useState } from 'react'
import Home from './Home.jsx'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
