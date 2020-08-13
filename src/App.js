import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import './DamageLocation';
import DamageLocation from './DamageLocation';
import PhotoPicker from './PhotoPicker';

function App() {
  const damageLocationList = [
    {checked: false, value: "Front"},
    {checked: false, value: "Passenger Side"},
    {checked: false, value: "Driver Side"},
    {checked: false, value: "Rear"},
    {checked: false, value: "Roof"},
    {checked: false, value: "Interior"},
    {checked: false, value: "Undercarriage"},
    {checked: false, value: "Attatched Trailer"},
    {checked: false, value: "Water Damage"},
    {checked: false, value: "Airbags Deployed"}
  ];

  const [photo, showPhoto] = useState(false);

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
          <DamageLocation checkboxList={damageLocationList} onContinue={() => showPhoto(!photo)}/>
        {/* <button onClick={() => showPhoto(!photo)}>show photo</button> */}
        <PhotoPicker show={photo}/>
        </div>
      </body>
    </div>
  );
}

export default App;
