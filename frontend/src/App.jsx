import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import photos from './mocks/photos';
import './App.scss';



const App = () => {
  const [likedPhotos, setLikedPhotos] = useState({});

  const handleLikeToggle = (photoId, isLiked) => {
    setLikedPhotos((prev) => {
      const updatedLikes = { ...prev };
      if (isLiked) {
        updatedLikes[photoId] = true;
      } else {
        delete updatedLikes[photoId];
      }
      return updatedLikes;
    });
  };


  return (
    <div className="photo-list">
      <TopNavigationBar isFavPhotoExist={Object.keys(likedPhotos).length > 0} />
      <PhotoList photos={photos.slice(0, 3)} onLikeToggle={handleLikeToggle} />
    </div>
  );
};

export default App;
