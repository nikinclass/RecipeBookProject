import { Link } from 'react-router-dom'; 
export default function RecipeCard({recipe, isFeatured}){
  const {name, desc, img_url} = recipe;
  return (
    <div className={'recipe-card ' + (isFeatured ? 'featured' : '')}>
        <h2>{name}</h2>
        <p>{desc}</p>
        <img src={img_url} alt={name}/>
        {isFeatured ? <Link to='/recipes'><button>Cook Now</button></Link> : <></>}
    </div>
  )
}