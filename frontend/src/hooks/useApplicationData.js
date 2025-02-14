import { useReducer } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import useTopics from "./useTopics";

export const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
};

/* Define the reducer function */
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: [...action.payload] };

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
  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    selectedPhoto: null,
  });

  //Get selectedTopicId from useTopics
  const { selectedTopicId, handleTopicClick, topics } = useTopics();

  

  //Fetch photos immediately and update on topic change
  useFetchPhotos(dispatch, ACTIONS, selectedTopicId);

  return { state, topics, handleTopicClick };
};

export default useApplicationData;