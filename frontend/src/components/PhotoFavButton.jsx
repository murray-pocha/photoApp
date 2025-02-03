import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = useCallback(() => {
    setIsFavorited((prev) => !prev);
    console.log("Favorite state changed:", !isFavorited);
  }, [isFavorited]);


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