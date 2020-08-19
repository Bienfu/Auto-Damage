import React, { useState, useCallback } from "react";
// import ListItem from "./ListItem";

function PhotoPicker(props) {
  const show = props.show;
  const [photo, setPhoto] = useState();
  // const handleClick = (evt) => {
  //   const shopName = evt.currentTarget.dataset.name;
  //   const shop = checkboxList.find(x => x.name === shopName);
  //   return props.onClickFunction(shop)
  // };
  const [filter, setFilter] = useState(100);

  const startTimer = useCallback(() => {
    setFilter(100);
    const interval = setInterval(() => {
      setFilter((filter) => {
        const newFilter = filter - 12.5;
        if(newFilter == 0){
          clearInterval(interval);
        }
        return newFilter;
      });
    }, 500);
  }, []);

  function handleChange(event) {
    const newValue = URL.createObjectURL(event.target.files[0]);
    //   newValue.includes(idx)? newValue.splice(newValue.indexOf(idx),1) : newValue.push(idx);
    setPhoto(newValue);
    startTimer();
    //   setTimeout(function(){ alert("Hello"); }, 3000);
  }

  // const listItems = checkboxList.map((item, index) => (
  //   <div key={index} className="CheckBoxItem">
  //         <label class="container">{item.value}
  //         <input type="checkbox" onChange={() => onCheckChange(index)}/>
  //         <span class="checkmark"></span>
  //         </label>
  //   </div>
  // ));
  return (
    <div className={show ? "PhotoPicker" : "hide"}>
      <div className="PhotoPickerTitle"></div>
      {/* <div className="ListItemsContainer">{listItems}</div> */}
      <input type="file" accept="image/*" onChange={handleChange} id="file" className="inputfile"/>
      <label for="file">
        Choose a file
        <i class="fas fa-file-upload uploadIcon"></i>
      </label>
      <div className="PhotoPickerContainer">

      <img
        src={photo}
        className="PhotoPickerPhoto"
        // style={{ filter: `grayscale(${filter}%)` }}
        />
      <img
        src={photo}
        className="PhotoPickerOverlay"
        style={{ "clip-path": `polygon(0 0, ${100-filter}% 0, ${100-filter}% 100%, 0% 100%)` }}
        />
        </div>
    </div>
  );
}

export default PhotoPicker;
