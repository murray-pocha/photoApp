import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, isFavPhotoExist, likedPhotos, onLikeToggle }) => {
  console.log("🔍 HomeRoute received likedPhotos:", likedPhotos);
  return (
    <div className="home-route">
      <TopNavigationBar
        isFavPhotoExist={isFavPhotoExist}
        topics={topics} />
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        onLikeToggle={onLikeToggle} />
    </div>
  );
};

export default HomeRoute;