import '/styles/Sidebar.css'

export default function Sidebar ({setter}) {
  return (
    <div className='flex-container'>
      <nav className='sidebar' id='sidebar-content' >
        <a onClick={() => {setter('breakfast')}}>Breakfast</a>
        <a onClick={() => {setter('lunch')}}>Lunch</a>
        <a onClick={() => {setter('dinner')}}>Dinner</a>
        <a onClick={() => {setter('dessert')}}>Dessert</a>
        <a onClick={() => {setter('drinks')}}>Drinks</a>
      </nav>
    </div>
  )
}