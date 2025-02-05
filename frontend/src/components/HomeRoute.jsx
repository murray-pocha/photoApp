import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, isFavPhotoExist, onLikeToggle }) => {
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} topics={topics} />
      <PhotoList photos={photos} onLikeToggle={onLikeToggle} />
    </div>
  );
};

export default HomeRoute;