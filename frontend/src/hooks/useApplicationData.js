import { useEffect, useReducer } from "react";


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
    photos: [],
    topics: [],
    selectedPhoto: null,
    favPhotoIds: initialFavPhotoIds,
  });

  const fetchPhotos = async () => {
    try {
      const response = await fetch("http://localhost:8001/api/photos");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Photos received by frontend:", data);
      
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const fetchTopics = async () => {
    try {
      const response = await fetch("http://localhost:8001/api/topics");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched Topics:", data);
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
    fetchTopics();
  }, []);

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
  };
};

export default useApplicationData;