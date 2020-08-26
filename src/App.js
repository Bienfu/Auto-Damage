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

  const [checkedList, changeList] = useState([]);

  const [json, showJson] = useState();

  function processPhotos(checkedItems) {
    const checkedList = checkedItems.map((item) => {
      return {
        value: item.replace(/\s+/g, '_').toLowerCase(),
        label: item,

      };
    });
    changeList(checkedList);
  }

  function renderPhotos() {
    // photos.map((photo, index) => (
    return (

      <div className="PhotoPickerItem">
        <PhotoPicker
          // index={index}
          // show={photoPickerIndex}
          // title={photo.description}
          onClick={nextPhoto}
          checkedList={checkedList}
          onUpload={onUpload}
          onUpdate={updateFileInfo}
          />
      </div>
          ) 
    // ));
  }

  function onUpload(fileInfo) {
    showPhotos((previousState) => {const newPhoto = [...previousState]
    newPhoto.push(fileInfo)
    return newPhoto});
  }

  function updateFileInfo(fileInfo){
    fileInfo.map((item)=>{
      const photo = photos.find((x) => x.newName === item.newName);
      photo.tags = item.tags;
      // console.log(photo);
    })
    showJson(JSON.stringify(photos, null, 1));
  }

  function nextPhoto() {
    // var newIndex =
    //   photoPickerIndex <= photos.length
    //     ? photoPickerIndex + 1
    //     : photoPickerIndex;
    // // if(newIndex == photos.length-1){
    // //   showButton(true);
    // // }
    // if (newIndex == photos.length) {
    //   console.log(JSON.stringify(photos, null, 1));
    // }
    // changeIndex(newIndex);
    showJson(JSON.stringify(photos, null, 1));
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
          {/* <DamageLocationImage checkboxList={damageLocationList} onContinue={processPhotos}/> */}
          <DamageLocation
            checkboxList={damageLocationList}
            onContinue={processPhotos}
          />
          {/* <button onClick={() => showPhoto(!photo)}>show photo</button> */}
          {checkedList.length>0 && renderPhotos()}
          {/* <button className={(finalButton) ? "continue display" : "hide"} onClick={nextPhoto}>Continue</button> */}
        </div>
          <pre >{json}</pre>
      </body>
    </div>
  );
}

export default App;
