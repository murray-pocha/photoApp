import { useEffect } from "react";

const useFetchPhotos = (dispatch, ACTIONS, selectedTopicId) => {
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const url = selectedTopicId
          ? `http://localhost:8001/api/topics/photos/${selectedTopicId}`
          : "http://localhost:8001/api/photos";

        const response = await fetch(url);
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

    fetchPhotos();
    fetchTopics();
  }, [dispatch, ACTIONS, selectedTopicId]);
};

export default useFetchPhotos;