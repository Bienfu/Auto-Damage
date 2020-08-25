import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./DamageLocation";
import DamageLocation from "./DamageLocation";
import PhotoPicker from "./PhotoPicker";
import "bootstrap/dist/css/bootstrap.min.css";
import DamageLocationImage from "./DamageLocationImage";

function App() {
  // const damageLocationList = [
  //   "Front",
  //   "Passenger Side",
  //   "Driver Side",
  //   "Rear",
  //   "Roof",
  //   "Interior",
  //   "Undercarriage",
  //   "Attached Trailer",
  //   "Water Damage",
  //   "Airbags Deployed",
  // ];
  const damageLocationList = [
    "Front Bumper",
    "Front Grille",
    "Front Hood",
    "Driver Side Front Door",
    "Driver Side Rear Door",
    "Driver Side Front Fender",
    "Driver Side Rear Bumper",
    "Passenger Side Front Door",
    "Passenger Side Rear Door",
    "Passenger Side Front Fender",
    "Passenger Side Rear Bumper",
    "Rear Bumper",
    "Trunk Lid",
    "Roof Panel",
    "Interior",
    "Undercarriage",
    // "Attached Trailer",
    // "Water Damage",
    // "Airbags Deployed",
  ];

  const [photos, showPhotos] = useState([]);

  const [photoPickerIndex, changeIndex] = useState(0);

  const [json, showJson] = useState();

  function processPhotos(checkedItems) {
    const photoList = checkedItems.map((item) => {
      return {
        description: item,
        name: undefined,
        size: undefined,
        date: undefined,
        url: undefined,
      };
    });
    showPhotos(photoList);
  }

  function renderPhotos() {
    return photos.map((photo, index) => (
      <div key={photo.description} className="PhotoPickerItem">
        <PhotoPicker
          index={index}
          show={photoPickerIndex}
          title={photo.description}
          onClick={nextPhoto}
          photos={photos}
          onUpload={showPhotos}
        />
      </div>
    ));
  }

  function nextPhoto() {
    var newIndex =
      photoPickerIndex <= photos.length
        ? photoPickerIndex + 1
        : photoPickerIndex;
    // if(newIndex == photos.length-1){
    //   showButton(true);
    // }
    if (newIndex == photos.length) {
      console.log(JSON.stringify(photos, null, 1));
      showJson(JSON.stringify(photos, null, 1));
    }
    changeIndex(newIndex);
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
          <DamageLocationImage checkboxList={damageLocationList} onContinue={processPhotos}/>
          <DamageLocation
            checkboxList={damageLocationList}
            onContinue={processPhotos}
          />
          {/* <button onClick={() => showPhoto(!photo)}>show photo</button> */}
          {renderPhotos()}
          {/* <button className={(finalButton) ? "continue display" : "hide"} onClick={nextPhoto}>Continue</button> */}
        </div>
          <pre >{json}</pre>
      </body>
    </div>
  );
}

export default App;
