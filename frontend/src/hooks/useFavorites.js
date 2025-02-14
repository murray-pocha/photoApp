import { useState, useEffect } from "react";

const useFavorites = () => {
  //Load favorite photos from localStorage on first render
  const storedFavPhotos = JSON.parse(localStorage.getItem("likedPhotos"));
  const initialFavPhotoIds = Array.isArray(storedFavPhotos) ? storedFavPhotos : [];

  const [favPhotoIds, setFavPhotoIds] = useState(initialFavPhotoIds);

  //Sync with localStorage whenever favPhotoIds changes
  useEffect(() => {
    localStorage.setItem("likedPhotos", JSON.stringify(favPhotoIds));
  }, [favPhotoIds]);

  //Toggle like/unlike & update backend
  const updateToFavPhotoIds = async (photoId) => {
    setFavPhotoIds((prevFavPhotoIds) =>
      prevFavPhotoIds.includes(photoId)
        ? prevFavPhotoIds.filter((id) => id !== photoId)
        : [...prevFavPhotoIds, photoId]
    );

    try {
      const response = await fetch(`http://localhost:8001/api/photos/${photoId}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  return { favPhotoIds, updateToFavPhotoIds };
};

export default useFavorites;