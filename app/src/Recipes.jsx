// import '../styles/Recipes.css';

// export default function Recipes () {

//   return(
//     <div className='recipes-container'>

//       <div className='left section'>
//       <h1 className="recipesTitle">Recipes</h1>
//       <img 
//       className="recepieImg"
//        src="https://media.tenor.com/wy2zHeWyf2gAAAAe/side-eye-dog-suspicious-look.png" 
//        alt="image of recepie"/>
//       </div>
      
//       <div className='Recipes-sidebar'>
//       <aside className="Recipesidebar">
//       <h3 className="instructionsTitle">instructions</h3>
//       <input type='checkbox' className='recipeCheckbox' name='recipeCheckbox' value='recipe'/>
//       <label for='checkbox1'>lorem</label>
//       <input type='checkbox' className='recipeCheckbox' name='recipeCheckbox' value='recipe'/>
//       <label for='checkbox2'>pourem</label>
//       <input type='checkbox' className='recipeCheckbox' name='recipeCheckbox' value='recipe'/>
//       <label for='checkbox3'>scorem</label>
//       <input type='checkbox' className='recipeCheckbox' name='recipeCheckbox' value='recipe'/>
//       <label for='checkbox4'>forem</label>
//       <input type='checkbox' className='recipeCheckbox' name='recipeCheckbox' value='recipe'/>
//       <label for='checkbox5'>torem</label>
//       </aside>
//       {/* <p className="instructionsDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, molestiae consequuntur. Nobis vero voluptatem modi perspiciatis deleniti vel, veniam architecto repudiandae sint nostrum nisi molestiae officia numquam quidem earum pariatur!</p> */}
// </div>
// <div>
//       <img className='ChefPic' 
//       src='https://i.pinimg.com/564x/ae/31/62/ae316256daf28f5ed4a8be128d4c4ec7.jpg' 
//       alt='Picture of Chef' />

//       <h3 className="userStory">User Story!</h3>
//       <p className="UserStoryDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ipsum dolor, quam sit doloremque, facere itaque est iure eius harum laudantium iste consequatur explicabo fugit quibusdam magni commodi amet officiis.</p>
//     </div>
//     <div className='reviews-section'>
//     <h2>Reveiws</h2>
//   </div>
//   </div>
//   );
// }

import '../styles/Recipes.css';

export default function Recipes() {
  return (
    <div className="recipes-container">
      <div className="left-section">
        <h1 className="recipesTitle">Recipes</h1>
        <img
          className="recepieImg"
          src="https://media.tenor.com/wy2zHeWyf2gAAAAe/side-eye-dog-suspicious-look.png"
          alt="image of recipe"
        />
      </div>

      <aside className="Recipes-sidebar" aria-label="Recipe checklist">
        <h3 className="instructionsTitle">Instructions</h3>

        <div>
          <input id="checkbox1" type="checkbox" className="recipeCheckbox" name="recipeCheckbox" value="recipe" />
          <label htmlFor="checkbox1">lorem</label>
        </div>
        <div>
          <input id="checkbox2" type="checkbox" className="recipeCheckbox" name="recipeCheckbox" value="recipe" />
          <label htmlFor="checkbox2">pourem</label>
        </div>
        <div>
          <input id="checkbox3" type="checkbox" className="recipeCheckbox" name="recipeCheckbox" value="recipe" />
          <label htmlFor="checkbox3">scorem</label>
        </div>
        <div>
          <input id="checkbox4" type="checkbox" className="recipeCheckbox" name="recipeCheckbox" value="recipe" />
          <label htmlFor="checkbox4">forem</label>
        </div>
        <div>
          <input id="checkbox5" type="checkbox" className="recipeCheckbox" name="recipeCheckbox" value="recipe" />
          <label htmlFor="checkbox5">torem</label>
        </div>
      </aside>

      <div className="right-section">
        <img
          className="ChefPic"
          src="https://i.pinimg.com/564x/ae/31/62/ae316256daf28f5ed4a8be128d4c4ec7.jpg"
          alt="Picture of Chef"
        />
        <h3 className="userStory">User Story!</h3>
        <p className="UserStoryDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit...
        </p>
      </div>

      <div className="reviews-section">
        <h2>Reviews</h2>
      </div>
    </div>
  );
}
