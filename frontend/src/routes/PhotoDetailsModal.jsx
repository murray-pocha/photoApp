import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, similarPhotos, onClose, likedPhotos, onLikeToggle, onPhotoClick }) => {
  const isFavorited = likedPhotos?.[photo.id] || false;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__fav-button">
        <PhotoFavButton isFavorited={isFavorited}
          toggleFavorite={() => {
            onLikeToggle(photo.id, !isFavorited);
            console.log("Toggled favorite for photo:", photo.id);
            console.log("Updated likedPhotos state:", likedPhotos);
          }}
        />
      </div>

      {/* render large image */}
      <img
        src={photo.urls.full}
        alt={`Photo taken in ${photo.location.city}`}
        className="photo-details-modal__image"
      />

      {/* Display Photographer Info */}
      <div className="photo-details-modal__info">
        <h3>{photo.user.name}</h3>
        <p>{photo.location.city}, {photo.location.country}</p>
      </div>

      {/* render similar photos using photolist*/}
      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <PhotoList photos={Object.values(similarPhotos)}
        likedPhotos={likedPhotos}
        onLikeToggle={onLikeToggle}
        onPhotoClick={onPhotoClick}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;