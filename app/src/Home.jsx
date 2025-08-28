import Sidebar from '../components/Sidebar'
import { useState, useEffect, useContext } from 'react'
import '../styles/Home.css'
import RecipeCard from '../components/RecipeCard';
import AppContext from './AppContext'

export default function Home (){
  const [view, setView] = useState('default');
  const {recipes, featured, setFeatured} = useContext(AppContext);

  useEffect(() => {
    setFeatured(recipes[0])
  }, [recipes])

  useEffect(()=>{
    setView('default')
  }, [])

  return (
    <div className='home'>
      <Sidebar setter={setView}/>
      { featured && view == 'default' ? <RecipeCard recipe={featured} isFeatured={true}/> : <></> }
      { view != 'default' ? (<></>) : <></> }

    </div>
  )
};