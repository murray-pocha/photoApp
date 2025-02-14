import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, onClick }) => {
  return (
    <li className="topic-list__item">
      <button
        onClick={() => {
          onClick();
        }}
        className="topic-list__button"
      >
        {title}
      </button>
    </li>
  );
};

export default TopicListItem;