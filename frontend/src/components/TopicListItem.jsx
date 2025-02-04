import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ title }) => {
  return (
    <li className="topic-list__item">
      { title }
    </li>
  );
};

export default TopicListItem;
