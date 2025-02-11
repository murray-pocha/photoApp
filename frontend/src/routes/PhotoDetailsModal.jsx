import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, similarPhotos, onClose, likedPhotos, onLikeToggle, onPhotoClick }) => {
  // ✅ Ensures correct type matching between `photo.id` and `likedPhotos`
  const isFavorited = likedPhotos.includes(photo.id);

  console.log("Modal received likedPhotos state:", likedPhotos);
  console.log("Modal - Current photo ID:", photo.id);
  console.log("Modal - Is photo favorited?", likedPhotos?.includes(Number(photo.id)));

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Render large image */}
      <div className="photo-details-modal__images">
        <div className="photo-details-modal__fav-icon">
          <PhotoFavButton
            isFavorited={isFavorited}
            toggleFavorite={() => onLikeToggle(photo.id, !isFavorited)}
          />
        </div>

        <img
          src={photo.urls.full}
          alt={`Photo taken in ${photo.location.city}`}
          className="photo-details-modal__image"
        />
      </div>

      {/* Display Photographer Info */}
      <div className="photo-details-modal__info">
        <h3>{photo.user.name}</h3>
        <p>{photo.location.city}, {photo.location.country}</p>
      </div>

      {/* Render similar photos using PhotoList */}
      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <PhotoList 
          photos={Object.values(similarPhotos)}
          likedPhotos={likedPhotos}
          onLikeToggle={onLikeToggle}
          onPhotoClick={onPhotoClick}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;