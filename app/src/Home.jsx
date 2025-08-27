import Sidebar from '../components/Sidebar'
import { useState, useEffect, useContext } from 'react'
import '../styles/Home.css'
import RecipeCard from '../components/RecipeCard';
import AppContext from './AppContext'

export default function Home (){
  const [view, setView] = useState('default');
  const {recipes} = useContext(AppContext);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    setFeatured(recipes[0])
  }, recipes)

  return (
    <div className='home'>
      <Sidebar setter={setView}/>
      { featured ? <RecipeCard recipe={featured} isFeatured={true}/> : <></> }

    </div>
  )
};