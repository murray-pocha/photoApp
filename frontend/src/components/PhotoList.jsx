import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = ({ photos, likedPhotos, onLikeToggle, onPhotoClick }) => {
  console.log("Photos received by PhotoList:", photos);


  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          likedPhotos={likedPhotos}
          onLikeToggle={onLikeToggle}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
