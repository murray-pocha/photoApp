import { useReducer, useState } from "react";
import useFetchData from "../hooks/useFetchData";


export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
};

/* Define the reducer function */
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: [...action.payload] };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: [...action.payload] };

    case ACTIONS.FAV_PHOTO_ADDED:
      const favPhotoIdsCopy = [...state.favPhotoIds]; // Create a new copy

      const updatedFavPhotos = favPhotoIdsCopy.includes(action.payload)
        ? favPhotoIdsCopy.filter((id) => id !== action.payload)
        : [...favPhotoIdsCopy, action.payload];

      // Ensure localStorage always stores an array
      localStorage.setItem("likedPhotos", JSON.stringify(updatedFavPhotos));

      return { ...state, favPhotoIds: updatedFavPhotos };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: { ...action.payload } };

    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return { ...state, selectedPhoto: null };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  // Ensure localStorage is parsed as an array
  const storedFavPhotos = JSON.parse(localStorage.getItem("likedPhotos"));
  const initialFavPhotoIds = Array.isArray(storedFavPhotos) ? storedFavPhotos : [];

  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    topics: [],
    selectedPhoto: null,
    favPhotoIds: initialFavPhotoIds,
  });

  const [selectedTopicId, setSelectedTopicId] = useState(null);

  useFetchData(dispatch, ACTIONS, selectedTopicId);

  const handleTopicClick = (topicId) => {
    console.log(`handleTopicClick triggered with topicId: ${topicId}`);
    setSelectedTopicId(topicId);
  };


  const updateToFavPhotoIds = async (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });

    try {
      const response = await fetch(`http://localhost:8001/api/photos/${photoId}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Like API Response:", data);
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  const setPhotoSelected = (photo) => {
    const fullPhotoData = state.photos.find(p => p.id === photo.id) || photo;

    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: {
        ...fullPhotoData,
        similar_photos: fullPhotoData.similar_photos
          ? Object.values(fullPhotoData.similar_photos) // Convert object to array
          : []
      }
    });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    handleTopicClick,
  };
};

export default useApplicationData;