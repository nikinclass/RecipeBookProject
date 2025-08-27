import '../styles/Favorites.css';

export default function Favorites() {
  return (
    <div className="favoritesSection">
      <div className="photoCard">
        {/* First Image */}
        <div className="photoItem">
          <h2 className="photoTitle">Photo 1</h2>
          <img
            src="https://www.kroger.com/product/images/xlarge/front/0007066201003"
            alt="Photo 1"
          />
          <p className="photoDescription">Favorite Image</p>
        </div>

        {/* Second Image */}
        <div className="photoItem">
          <h2 className="photoTitle">Photo 2</h2>
          <img
            src="https://www.kroger.com/product/images/xlarge/front/0007066201003"
            alt="Photo 2"
          />
          <p className="photoDescription">Favorite Image</p>
        </div>

        <div className='photoItem'>
            <h2 className='photoTitle'>Photo 3</h2>
            <img src='https://www.kroger.com/product/images/xlarge/front/0007066201003' alt='Photo 3' />
            <p className="photoDescription">Favorite Image</p>
        </div>
      </div>
    </div>
  );
}