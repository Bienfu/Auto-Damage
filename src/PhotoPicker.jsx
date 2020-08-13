import React, { useState } from "react";
// import ListItem from "./ListItem";


function PhotoPicker(props) {
    const show = props.show;
    const [photo, setPhoto] = useState();
    // const handleClick = (evt) => {
    //   const shopName = evt.currentTarget.dataset.name;
    //   const shop = checkboxList.find(x => x.name === shopName);
    //   return props.onClickFunction(shop)
    // };

    function handleChange(event){
      const newValue = URL.createObjectURL(event.target.files[0]);
    //   newValue.includes(idx)? newValue.splice(newValue.indexOf(idx),1) : newValue.push(idx);
      setPhoto(newValue);
    }

    // const listItems = checkboxList.map((item, index) => (
    //   <div key={index} className="CheckBoxItem">
    //         <label class="container">{item.value}
    //         <input type="checkbox" onChange={() => onCheckChange(index)}/>
    //         <span class="checkmark"></span>
    //         </label>
    //   </div>
    // ));
    const filter = 50;
    return (
            <div className={show ? "PhotoPicker" : "hide"}>
              <h1 className="PhotoPickerTitle">Please select a photo to upload</h1>
              {/* <div className="ListItemsContainer">{listItems}</div> */}
              <input type="file" accept="image/*" onChange={handleChange}/>
              <img src={photo} className="PhotoPickerPhoto" style={{filter: `grayscale(${filter}%)`}}/>
            </div>
           );
  }

export default PhotoPicker;