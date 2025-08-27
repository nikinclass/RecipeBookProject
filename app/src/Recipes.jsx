import '../styles/Recipes.css';
import { useState } from 'react'

export default function Recipes () {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHover(value);
  };

  const handleSubmit = () => {
    if (rating === 0 || reviewText.trim() === '') {
      alert('Please select a rating and provide a review before submitting.');
      return;
    }

    const newReview = { rating, text: reviewText };
    setReviews([...reviews, newReview])
    setRating(0);
    setHover(0);
    setReviewText('');
  };

  const getStarClass = (index) =>{
    if ((hover || rating) >= index) {
      return 'selected';
    }
    return '';
    };
 
  return(
    <div className='recipes-container'>

      <div className='left section'>
      <h1 className="recipesTitle">Recipes</h1>
      <img 
      className="recepieImg"
       src="https://media.tenor.com/wy2zHeWyf2gAAAAe/side-eye-dog-suspicious-look.png" 
       alt="image of recepie"/>
      </div>
      
      <div className='right-section'>
      <div className='instructions-card'>

      <h3 className="instructionsTitle">instructions</h3>
      {['lorem', 'pourem', 'scorem', 'forem', 'torem'].map((item, index) =>(
        <div key={index} className='checkbox-item'>
          <input 
          type='checkbox'
          id={`checkbox${index + 1}`}
          className='recipeCheckbox'
          name='recipeCheckbox'
          value={item} />
          <label htmlFor={`checkbox${index + 1}`}>{item}</label>
          </div>
      ))}
</div>

      <img className='ChefPic' 
      src='https://i.pinimg.com/564x/ae/31/62/ae316256daf28f5ed4a8be128d4c4ec7.jpg' 
      alt='Picture of Chef' />

      <h3 className="userStory">User Story!</h3>
      <p className="UserStoryDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ipsum dolor, quam sit doloremque, facere itaque est iure eius harum laudantium iste consequatur explicabo fugit quibusdam magni commodi amet officiis.</p>
    </div>

    <div className='reviews-section'>
    <h2>Reveiws</h2>

      {/* ratings */}

      <div className='rating-container'>
        <div className='rating'><span>{rating}</span>/5</div>
        <div className='stars'>
          {[1, 2, 3, 4, 5].map((value) => (
            <span 
            key={value}
            className={`star ${getStarClass(value)}`}
            onClick={() => handleStarClick(value)}
            onMouseEnter={() => handleStarHover(value)}
            onMouseLeave={() => setHover(0)}>
              ☆
            </span>
          ))}
        </div>
      </div>
          {/* reveiws */}
          <p>Share your review</p>
          <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder='Write your reveiw here' />
          <button onClick={handleSubmit}>Submit</button>

          {/* display reviews */}

          <div className='reviews'>
            {reviews.map((review, index) => (
              <div className='review' key={index}>
                <p><strong>Rating: {review.rating}/5</strong></p>
                </div>
            ))}
          </div>
        </div>
      </div>
    );
  }