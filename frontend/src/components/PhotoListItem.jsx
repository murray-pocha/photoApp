import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, likedPhotos, onLikeToggle }) => {

  const isFavorited = likedPhotos?.[photo.id] || false;

  console.log(`PhotoListItem ${photo.id} - isFavorited:`, isFavorited);

  const toggleFavorite = () => {
    console.log(`Toggling favorite for photo ${photo.id}`);
    onLikeToggle(photo.id, !isFavorited);
  };

  return (
    <div className="photo-list__item">
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