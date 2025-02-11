import { useReducer } from "react";
import photosData from "../mocks/photos";
import topicsData from "../mocks/topics";

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
      return { ...state, photos: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };

    case ACTIONS.FAV_PHOTO_ADDED:
      const updatedFavPhotos = state.favPhotoIds.includes(action.payload)
        ? state.favPhotoIds.filter((id) => id !== action.payload)
        : [...state.favPhotoIds, action.payload];

      // Ensure localStorage always stores an array
      localStorage.setItem("likedPhotos", JSON.stringify(updatedFavPhotos));

      return { ...state, favPhotoIds: updatedFavPhotos };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };

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
    photos: photosData,
    topics: topicsData,
    selectedPhoto: null,
    favPhotoIds: initialFavPhotoIds,
  });

  // Console logs for debugging
  console.log("Initial Photos Data:", photosData);
  console.log("State after initialization:", state);

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
  };

  const setPhotoSelected = (photo) => {
    console.log("Selecting Photo:", photo);
    console.log("Photo's similar_photos type:", typeof photo.similar_photos);
    console.log("Photo's similar_photos value:", photo.similar_photos);

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
  };
};

export default useApplicationData;