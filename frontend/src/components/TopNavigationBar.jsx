import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ isFavPhotoExist, topics, onTopicClick }) => {
  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <div className="top-nav-bar__topics">
        <TopicList topics={topics} onTopicClick={onTopicClick} />
      </div>

      <div className="top-nav-bar__likes">
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </nav>
  );
};

export default TopNavigationBar;