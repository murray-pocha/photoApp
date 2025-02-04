import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import photos from './mocks/photos';
import './App.scss';



const App = () => {
  console.log("Photos from photos.js:", photos);
  return (
    <div className="photo-list">
      <h1>Photo Gallery</h1>
      <TopicList />
      <PhotoList photos={photos.slice(0, 3)} />
    </div>
  );
};

export default App;
