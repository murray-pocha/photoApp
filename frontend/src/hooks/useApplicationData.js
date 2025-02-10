import { useState } from "react";
import photosData from "../mocks/photos";
import topicsData from "../mocks/topics";

const useApplicationData = () => {
  const [state, setState] = useState({
    photos: photosData,
    topics: topicsData,
    selectedPhoto: null,
    favPhotoIds: [],
  });

  // Action to set a selected photo
  const setPhotoSelected = (photo) => {
    setState((prev) => ({ ...prev, selectedPhoto: photo }));
  };

  // Action to toggle favorite photos
  const updateToFavPhotoIds = (photoId) => {
    setState((prev) => {
      const favPhotoIds = prev.favPhotoIds.includes(photoId)
        ? prev.favPhotoIds.filter((id) => id !== photoId)
        : [...prev.favPhotoIds, photoId];

        console.log("Before state update:", prev.favPhotoIds);
        console.log("New state update:", favPhotoIds);
        
      return { ...prev, favPhotoIds };
    });

    console.log("Updated likedPhotos state:", state.favPhotoIds);
  };

  // Action to close modal (clear selected photo)
  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({ ...prev, selectedPhoto: null }));
  };

  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;