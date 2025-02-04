import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
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
      <HomeRoute
      photos={photos.slice(0, 3)}
      isFavPhotoExist={Object.keys(likedPhotos).length > 0}
      onLikeToggle={handleLikeToggle} />
    </div>
  );
};

export default App;
