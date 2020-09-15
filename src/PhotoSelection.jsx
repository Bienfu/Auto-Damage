import React, { useState } from "react";
// import ListItem from "./ListItem";


function DamageSelection(props) {
    const onSubmit = props.onSubmit;
    const [numPhotos, changeNumPhotos] = useState(0);

    const [selected, changeSelected] = useState([]);

    const photoList = [
        "./front.jpg",
        "./door.jpg",
        "./backwheel.jpg"
    ];

    function onClickImage(idx){
        const newValue = [...selected];
        newValue.includes(idx)? newValue.splice(newValue.indexOf(idx),1) : newValue.push(idx);
        changeNumPhotos(newValue.length);
        changeSelected(newValue);
    }

    function isSelected(idx){
        const newValue = [...selected];
        return newValue.includes(idx)? true : false;
    }

    const listItems = photoList.map((item, index) => (
        <div className="selectPhotoContainer">
            <img src={item} className={isSelected(index)? "selectedPhoto": "unselectedPhoto"} onClick={() => onClickImage(index)}/>
            {isSelected(index)? <div className="check" onClick={() => onClickImage(index)}/>: null}
        </div>
      ));
  
    return (
            <div className="DamageSelection">
              <div className="DamageSelectionTitle">{numPhotos} Photos Selected</div>
              <div className="DamageSelectionContent">
              {listItems}
              </div>
              {selected.length>0 && <button className="continue" onClick={() => onSubmit(selected)}>Submit</button>}
            </div>
           );
  }

export default DamageSelection;