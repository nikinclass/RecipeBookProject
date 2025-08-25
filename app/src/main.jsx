import { BrowserRouter as Router } from 'react-dom-router'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
