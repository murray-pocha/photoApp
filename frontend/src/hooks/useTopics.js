import { useState, useEffect } from "react";

const useTopics = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  // Fetch topics from API
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/topics");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTopics(data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, []);

  // Handle topic selection
  const handleTopicClick = (topicId) => {
    setSelectedTopicId(topicId);
  };

  return { topics, selectedTopicId, handleTopicClick };
};

export default useTopics;