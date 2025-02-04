import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';
import photos from './mocks/photos';
import './App.scss';



const App = () => {
  console.log("Photos from photos.js:", photos);
  return (
    <div className="photo-list">
      <TopNavigationBar />
      <PhotoList photos={photos.slice(0, 3)} />
    </div>
  );
};

export default App;
