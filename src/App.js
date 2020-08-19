import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import './DamageLocation';
import DamageLocation from './DamageLocation';
import PhotoPicker from './PhotoPicker';

function App() {
  const damageLocationList = [
    "Front",
    "Passenger Side",
    "Driver Side",
    "Rear",
    "Roof",
    "Interior",
    "Undercarriage",
    "Attached Trailer",
    "Water Damage",
    "Airbags Deployed"
  ];

  const [photos, showPhotos] = useState([]);

  function processPhotos(checkedItems){
    const photoList = checkedItems.map((item) => {
      return {
        description: item,
        name: undefined,
        size: undefined,
        date: undefined,
        url:  undefined,
      }
    })
    showPhotos(photoList);
  }

  function renderPhotos(){
    return (
      photos.map((photo, index)=> (
        <div key={photo.description} className="PhotoPickerItem">
          Photo for {photo.description}
        </div>
      ))
    )
  }


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body>
        <div class="content">
          <DamageLocation checkboxList={damageLocationList} onContinue={processPhotos}/>
        {/* <button onClick={() => showPhoto(!photo)}>show photo</button> */}
        {renderPhotos()}
        </div>
      </body>
    </div>
  );
}

export default App;

