import React from 'react';
import PhotoList from './components/PhotoList';
import photos from './mocks/photos';
import './App.scss';


console.log("Photos from photos.js:", photos);
console.log("Photos data type:", typeof photos);
console.log("Is Photos an Array?", Array.isArray(photos));



const App = () => {
  console.log("Photos from photos.js:", photos);
  return (
    <div className="photo-list">
      <h1>Photo Gallery</h1>
        <PhotoList photos={photos.slice(0, 3)} />
    </div>
  );
};

export default App;
