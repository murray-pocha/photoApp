import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {


  // Destructure state and actions from custom hook
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    handleTopicClick,
  } = useApplicationData();

 
  return (

    <div className="photo-list">
      <HomeRoute
        photos={state.photos || []}
        topics={state.topics}
        isFavPhotoExist={Object.keys(state.favPhotoIds).length > 0}
        likedPhotos={state.favPhotoIds}
        onLikeToggle={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
        onTopicClick={handleTopicClick}
      />

      {state.selectedPhoto && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          similarPhotos={state.selectedPhoto.similar_photos || []}
          likedPhotos={state.favPhotoIds}
          onLikeToggle={updateToFavPhotoIds}
          onClose={onClosePhotoDetailsModal}
          onPhotoClick={setPhotoSelected}
        />
      )}
    </div>
  );
};

export default App;
