import React from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoListItem.scss";
const PhotoListItem = ({ photo }) => {
 
  return (
    <div className="photo-list__item">
      <img src={photo.imageSource} alt={`Photo taken in ${photo.location.city}`} className="photo" />
      <div className="photo-details">
        <img src={photo.profile} alt={`${photo.username} profile`} className="profile-pic" />
        <div>
          <h3>{photo.username}</h3>
          <p>{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;