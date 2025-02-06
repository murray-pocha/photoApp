import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = ({ photos, likedPhotos, onLikeToggle }) => {
  console.log("✅ PhotoList received likedPhotos:", likedPhotos);
  
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          likedPhotos={likedPhotos}
          onLikeToggle={onLikeToggle} />
      ))}
    </ul>
  );
};

export default PhotoList;
