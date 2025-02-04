import React, { useState } from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);
  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <div className="top-nav-bar__topics">
        <TopicList />
      </div>

      <div className="top-nav-bar__likes">
        <FavBadge is isFavPhotoExist={isFavPhotoExist} />
      </div>
    </nav>
  );
};

export default TopNavigationBar;