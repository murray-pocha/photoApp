import { useEffect } from "react";

const useFetchPhotos = (dispatch, ACTIONS, selectedTopicId) => {
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const url = selectedTopicId
          ? `http://localhost:8001/api/topics/photos/${selectedTopicId}`
          : "http://localhost:8001/api/photos"; // Default to all photos on first load

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos(); // Fetch photos immediately when component mounts and when topic changes
  }, [dispatch, ACTIONS, selectedTopicId]); 

  return {}; 
};

export default useFetchPhotos;