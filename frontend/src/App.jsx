import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import usePhotoSelection from "./hooks/usePhotoSelection";
import useFavorites from "./hooks/useFavorites";
import LikedPhotosModal from "./components/LikedPhotosModal";

const App = () => {
  const { state, topics, handleTopicClick } = useApplicationData();
  const { selectedPhoto, setPhotoSelected, onClosePhotoDetailsModal } = usePhotoSelection(state.photos);
  const { favPhotoIds, updateToFavPhotoIds } = useFavorites();
  const [isLikedPhotosModalOpen, setIsLikedPhotosModalOpen] = useState(false);

  const toggleLikedPhotosModal = () => {
    setIsLikedPhotosModalOpen(prev => !prev);
  };

  const likedPhotos = state.photos.filter(photo => favPhotoIds.includes(photo.id));

  return (
    <div className="photo-list">
      <HomeRoute
        photos={state.photos || []}
        topics={topics}
        isFavPhotoExist={favPhotoIds.length > 0}
        likedPhotos={favPhotoIds}
        onLikeToggle={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
        onTopicClick={handleTopicClick}
        toggleLikedPhotosModal={toggleLikedPhotosModal}
      />

      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={selectedPhoto.similar_photos || []}
          likedPhotos={favPhotoIds}
          onLikeToggle={updateToFavPhotoIds}
          onClose={onClosePhotoDetailsModal}
          onPhotoClick={setPhotoSelected}
        />
      )}

      {isLikedPhotosModalOpen && (
        <LikedPhotosModal likedPhotos={likedPhotos} onClose={toggleLikedPhotosModal} />
      )}
    </div>
  );
};

export default App;