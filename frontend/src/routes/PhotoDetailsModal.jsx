import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({
  photo,
  similarPhotos = [],
  onClose,
  likedPhotos,
  onLikeToggle,
  onPhotoClick
}) => {



  const isFavorited = likedPhotos.includes(photo.id);


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
          photos={Object.values(similarPhotos || {}).filter(p => p.id !== photo.id)}
          likedPhotos={likedPhotos}
          onLikeToggle={onLikeToggle}
          onPhotoClick={(newPhoto) => {
            onPhotoClick({
              ...newPhoto,
              similar_photos: Array.isArray(newPhoto.similar_photos)
                ? newPhoto.similar_photos
                : Object.values(newPhoto.similar_photos || {})
            });
          }}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;