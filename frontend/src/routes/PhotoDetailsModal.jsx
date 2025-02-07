import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ photo, similarPhotos, onClose }) => {
  console.log("PhotoDetailsModal received photo:", photo);
  console.log("PhotoDetailsModal received similar photos:", similarPhotos);


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <img
        src={photo.urls.full}
        alt={`Photo taken in ${photo.location.city}`}
        className="photo-details-modal__image"
      />

      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <PhotoList photos={Object.values(similarPhotos)} onPhotoClick={() => {}} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;