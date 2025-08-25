import '../styles/Recipes.css';

export default function Recipes () {

  return(
    <div className='recipes-container'>

      <div className='left section'>
      <h1 className="recipesTitle">Recipes</h1>
      <img 
      className="recepieImg"
       src="https://media.tenor.com/wy2zHeWyf2gAAAAe/side-eye-dog-suspicious-look.png" 
       alt="image of recepie"/>
      </div>
      
      <div className='right-Section'>
      <h3 className="instructionsTitle">instructions</h3>
      <input type='checkbox' className='recipeCheckbox' name='recipeCheckbox' value='recipe'/>
      <label for='checkbox1'>lorem</label>
      {/* <p className="instructionsDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, molestiae consequuntur. Nobis vero voluptatem modi perspiciatis deleniti vel, veniam architecto repudiandae sint nostrum nisi molestiae officia numquam quidem earum pariatur!</p> */}

      <img className='ChefPic' 
      src='https://i.pinimg.com/564x/ae/31/62/ae316256daf28f5ed4a8be128d4c4ec7.jpg' 
      alt='Picture of Chef' />

      <h3 className="userStory">User Story!</h3>
      <p className="UserStoryDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ipsum dolor, quam sit doloremque, facere itaque est iure eius harum laudantium iste consequatur explicabo fugit quibusdam magni commodi amet officiis.</p>
    </div>
    <div className='reviews-section'>
    <h2>Reveiws</h2>
  </div>
  </div>
  );
}