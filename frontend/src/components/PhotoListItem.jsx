import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  return (
    <div className="photo-list__item">
      <img 
        src={photo.imageSource} 
        alt={`Photo taken in ${photo.location.city}`} 
        className="photo-list__image" 
      />
      <div className="photo-list__user-details">
        <img 
          src={photo.profile} 
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