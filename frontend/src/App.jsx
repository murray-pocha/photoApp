import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import usePhotoSelection from "./hooks/usePhotoSelection";
import useFavorites from "./hooks/useFavorites";

const App = () => {
  const { state, topics, handleTopicClick } = useApplicationData();
  const { selectedPhoto, setPhotoSelected, onClosePhotoDetailsModal } = usePhotoSelection(state.photos);
  const { favPhotoIds, updateToFavPhotoIds } = useFavorites();

  return (
    <div className="photo-list">
      <HomeRoute
        photos={state.photos || []}
        topics={topics}
        isFavPhotoExist={favPhotoIds.length > 0}
        likedPhotos={favPhotoIds}
        onLikeToggle={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
        onTopicClick={handleTopicClick} // ✅ Ensure the function is passed correctly
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
    </div>
  );
};

export default App;