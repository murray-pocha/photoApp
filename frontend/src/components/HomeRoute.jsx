import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import TopicList from "./TopicList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, isFavPhotoExist, onLikeToggle }) => {

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <TopicList topics={topics || []} />

      {Array.isArray(topics) && topics.length > 0 && (
        <div className="topics-list">
          {(topics || []).map((topic) => (
            <button key={topic.id} className="topic-button">
              {topic.title}
            </button>
          ))}
        </div>
      )}
      <PhotoList photos={photos} onLikeToggle={onLikeToggle} />
    </div>
  );
};

export default HomeRoute;