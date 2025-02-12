import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, isFavPhotoExist, likedPhotos, onLikeToggle, onPhotoClick }) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar
        isFavPhotoExist={isFavPhotoExist}
        topics={topics} />
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        onLikeToggle={onLikeToggle}
        onPhotoClick={onPhotoClick}
        />
    </div>
  );
};

export default HomeRoute;