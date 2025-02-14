import { useState } from "react";

const usePhotoSelection = (photos) => {
  // selectedPhoto state here
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // setPhotoSelected function here
  const setPhotoSelected = (photo) => {

    // Find full photo data from photos array
    const fullPhotoData = photos.find((p) => p.id === photo.id) || photo;

    setSelectedPhoto({
      ...fullPhotoData,
      similar_photos: fullPhotoData.similar_photos
        ? Object.values(fullPhotoData.similar_photos) // Convert object to array
        : [],
    });
  };

  // onClosePhotoDetailsModal function here
  const onClosePhotoDetailsModal = () => {
    setSelectedPhoto(null);
  };

  return { selectedPhoto, setPhotoSelected, onClosePhotoDetailsModal };
};

export default usePhotoSelection;