import { Link } from 'react-router-dom';
export default function RecipeCard({recipe, isFeatured}){
  const {name, description, picture_url} = recipe;

  if( isFeatured ){
    return (
      <div className='recipe-card featured'>
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={picture_url} alt={name}/>
        <Link to='/recipes'><button>Cook Now</button></Link>
      </div>
    )
  }

  return (
    <Link to={`/recipes/${recipe.id}`}>
      <div className='recipe-card'>
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={picture_url} alt={name}/>
      </div>
    </Link>
  )
}