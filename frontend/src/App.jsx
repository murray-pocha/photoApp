import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import photos from './mocks/photos';
import './App.scss';




const App = () => {
  console.log("Photos from photos.js:", photos);
  return (
    <div className="photo-list">
      <h1>Photo Gallery</h1>
      {photos.slice(0, 3).map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default App;
