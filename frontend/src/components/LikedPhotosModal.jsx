import React from "react";
import "../styles/LikedPhotosModal.scss";

const LikedPhotosModal = ({ likedPhotos, onClose }) => {
  console.log("Liked Photos Data:", likedPhotos);

  return (
    <div className="liked-photos-modal">
      <div className="liked-photos-modal__overlay" onClick={onClose}></div>

      {/* Added navbar box wrapper */}
      <div className="liked-photos-modal__nav">
        <button className="liked-photos-modal__close-button" onClick={onClose}>
          ✖
        </button>
        <h2 className="liked-photos-modal__title">My favorite photos</h2>
      </div>

      <div className="liked-photos-modal__content">
        {likedPhotos.length > 0 ? (
          <div className="liked-photos-modal__grid">
            {likedPhotos.map((photo) => (
              <div className="liked-photos-modal__photo-card" key={photo.id}>
                {/* Wrapped everything inside a "photo-card" div for consistent styling */}
                
                {/* Liked Photo */}
                <div className="liked-photos-modal__photo-container">
                  <img
                    src={photo.urls.regular}
                    alt={photo.user.name}
                    className="liked-photos-modal__image"
                  />
                </div>
                
                {/* Photographer Information */}
                <div className="liked-photos-modal__info">
                  <p className="liked-photos-modal__photographer">{photo.user.name}</p>
                  <p className="liked-photos-modal__photographer-location">
                    {photo.location.city}, {photo.location.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="liked-photos-modal__no-photos">No liked photos yet.</p>
        )}
      </div>
    </div>
  );
};

export default LikedPhotosModal;