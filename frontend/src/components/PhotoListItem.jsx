import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo }) => {
  console.log("Image URL:", photo.urls.regular);
  return (
    <div className="photo-list__item">
      <PhotoFavButton />

      <img 
        src={photo.urls.regular} 
        alt={`Photo taken in ${photo.location.city}`} 
        className="photo-list__image" 
      />
      <div className="photo-list__user-details">
        <img 
          src={photo.user.profile} 
          alt={`${photo.username} profile`} 
          className="photo-list__user-profile" 
        />
        <div className="photo-list__user-info">
          <h3>{photo.username}</h3>
          <p className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;