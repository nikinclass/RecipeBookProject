export default function Sidebar ({setter}) {
  return (
    <nav className='sidebar'>
      <a onClick={() => {setter('breakfast')}}>Breakfast</a>
      <a onClick={() => {setter('lunch')}}>Lunch</a>
      <a onClick={() => {setter('dinner')}}>Dinner</a>
      <a onClick={() => {setter('dessert')}}>Dessert</a>
      <a onClick={() => {setter('drinks')}}>Drinks</a>
    </nav>
  )
}