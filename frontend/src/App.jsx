import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topicsData from './mocks/topics';
import './App.scss';



const App = () => {

  const [likedPhotos, setLikedPhotos] = useState(() => {
    const savedLikes = localStorage.getItem("likedPhotos");
    return savedLikes ? JSON.parse(savedLikes) : {};
  });

  const topics = topicsData || [];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleLikeToggle = (photoId, isLiked) => {
    setLikedPhotos((prev) => {
      const updatedLikes = { ...prev };
      if (isLiked) {
        updatedLikes[photoId] = true;
      } else {
        delete updatedLikes[photoId];
      }

      localStorage.setItem("likedPhotos", JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };


  return (
    <div className="photo-list">
      <HomeRoute
        photos={photos.slice(0, 3)}
        topics={topics}
        isFavPhotoExist={Object.keys(likedPhotos).length > 0}
        likedPhotos={likedPhotos}
        onLikeToggle={handleLikeToggle}
        onPhotoClick={handlePhotoClick}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={selectedPhoto.similar_photos}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
