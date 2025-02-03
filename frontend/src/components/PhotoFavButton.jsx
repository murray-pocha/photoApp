import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavorited, toggleFavorite }) {
  return (
    <div className="photo-list__fav-icon">
      <button
        className={`photo-list__fav-icon-svg ${isFavorited ? "favorited" : ""}`}
        onClick={toggleFavorite}
      >
        <FavIcon selected={isFavorited} />
      </button>
    </div>
  );
}

export default PhotoFavButton;