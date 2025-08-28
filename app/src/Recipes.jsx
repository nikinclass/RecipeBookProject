import '../styles/Recipes.css';
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import AppContext from './AppContext';
import { getName, getPicture, getInstructions } from '../utils/utils'

export default function Recipes () {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const { recipes, featured } = useContext(AppContext);
  const { id } = useParams();

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
    if ((hover || rating) >= index) { return 'selected' };
    return '';
  };

  if ( recipes.length <= 0 ){return <div className="recipes-container">Loading</div>}

  return(
    <div className='recipes-container'>

      <div className='left section'>
        <h1 className="recipesTitle">{getName(id, recipes[id], featured)}</h1>
        <img className="recepieImg" src={getPicture(id, recipes[id], featured)} alt={getName(id, recipes[id], featured)}/>
      </div>

      <div className='right-section'>
        <div className='instructions-card'>
          <h3 className="instructionsTitle">Instructions</h3>
          <p>{getInstructions(id, recipes[id], featured)}</p>
        </div>
      <img className='ChefPic'
      src='https://i.pinimg.com/564x/ae/31/62/ae316256daf28f5ed4a8be128d4c4ec7.jpg'
      alt='Picture of Chef' />
      <h3 className="userStory">User Story!</h3>
      <p className="UserStoryDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ipsum dolor, quam sit doloremque, facere itaque est iure eius harum laudantium iste consequatur explicabo fugit quibusdam magni commodi amet officiis.</p>
    </div>

    <div className='reviews-section'>
      <h2>Reveiws</h2>
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

      <p>Share your review</p>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder='Write your reveiw here' />
      <button onClick={handleSubmit}>Submit</button>

      <div className='reviews'>
        {reviews.map((review, index) => (
          <div className='review' key={index}>
            <p><strong>Rating: {review.rating}/5</strong></p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}