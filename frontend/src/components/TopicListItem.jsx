import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = ({ title }) => {
  return (
    <li className="topic-list__item">
      { title }
    </li>
  );
};

export default TopicListItem;
