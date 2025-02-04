import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, isFavPhotoExist, onLikeToggle }) => {
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} onLikeToggle={onLikeToggle} />
    </div>
  );
};

export default HomeRoute;