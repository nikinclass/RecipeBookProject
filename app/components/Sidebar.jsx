import '/styles/Sidebar.css'
import { useState } from 'react';

export default function Sidebar ({setter}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='sidebar-wrapper'>
      {!isOpen?'':(
        <nav className='sidebar' id='sidebar-content' >
          <a onClick={() => {setter('breakfast')}}>Breakfast</a>
          <a onClick={() => {setter('lunch')}}>Lunch</a>
          <a onClick={() => {setter('dinner')}}>Dinner</a>
          <a onClick={() => {setter('dessert')}}>Dessert</a>
          <a onClick={() => {setter('drinks')}}>Drinks</a>
        </nav>
      )}
      <div className='sidebar-collapse' onClick={() => {setIsOpen(!isOpen)}}>
        ...
      </div>
    </div> 
  )
}
