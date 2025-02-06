import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topicsData from './mocks/topics';
import './App.scss';



const App = () => {
 
  const [likedPhotos, setLikedPhotos] = useState(() => {
    const savedLikes = localStorage.getItem("likedPhotos");
    return savedLikes ? JSON.parse(savedLikes) : {};
  });

  const topics = topicsData || [];

  const handleLikeToggle = (photoId, isLiked) => {
    setLikedPhotos((prev) => {
      const updatedLikes = { ...prev };
      if (isLiked) {
        updatedLikes[photoId] = true;
      } else {
        delete updatedLikes[photoId];
      }

      localStorage.setItem("likedPhotos", JSON.stringify(updatedLikes));
      console.log("Updated likedPhotos state:", updatedLikes);
      return updatedLikes;
    });
  };


  return (
    <div className="photo-list">
      <HomeRoute
      photos={photos.slice(0, 3)}
      topics={topics}
      isFavPhotoExist={Object.keys(likedPhotos).length > 0}
      likedPhotos={likedPhotos}
      onLikeToggle={handleLikeToggle} />
    </div>
  );
};

export default App;
