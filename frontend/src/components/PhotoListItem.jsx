import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, likedPhotos, onLikeToggle, onPhotoClick }) => {

  const isFavorited = likedPhotos?.[photo.id] || false;

  const toggleFavorite = (event) => {
    event.stopPropagation();
    onLikeToggle(photo.id, !isFavorited);
    console.log(`Toggled favorite for photo: ${photo.id}`);
    console.log("Updated likedPhotos state:", likedPhotos);
  };

  return (
    <div className="photo-list__item" onClick={() => onPhotoClick(photo)}>
      <PhotoFavButton isFavorited={isFavorited} toggleFavorite={toggleFavorite} />

      <img 
        src={photo.urls.regular} 
        alt={`Photo taken in ${photo.location.city}`} 
        className="photo-list__image" 
      />
      
      <div className="photo-list__user-details">
        <img 
          src={photo.user.profile} 
          alt={`${photo.user.name} profile`} 
          className="photo-list__user-profile" 
        />

        <div className="photo-list__user-info">
          <h3>{photo.user.name}</h3>
          <p className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;