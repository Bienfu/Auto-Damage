import React, { useState, useCallback } from "react";
// import ListItem from "./ListItem";
import UploadFiles from "./components/upload-files.component.jsx";

function PhotoPicker(props) {
  const show = props.show;
  // const index = props.index;
  // const title = props.title;
  const onClick = props.onClick;
  const onUpload = props.onUpload;
  const checkedList = props.checkedList;
  const onUpdate = props.onUpdate;
  // const [photo, setPhoto] = useState();
  // const handleClick = (evt) => {
  //   const shopName = evt.currentTarget.dataset.name;
  //   const shop = checkboxList.find(x => x.name === shopName);
  //   return props.onClickFunction(shop)
  // };
  // const [filter, setFilter] = useState(100);

  // const startTimer = useCallback(() => {
  //   setFilter(100);
  //   const interval = setInterval(() => {
  //     setFilter((filter) => {
  //       const newFilter = filter - 12.5;
  //       if(newFilter == 0){
  //         clearInterval(interval);
  //       }
  //       return newFilter;
  //     });
  //   }, 500);
  // }, []);

  // function handleChange(event) {
  //   const newValue = URL.createObjectURL(event.target.files[0]);
  //   //   newValue.includes(idx)? newValue.splice(newValue.indexOf(idx),1) : newValue.push(idx);
  //   setPhoto(newValue);
  //   startTimer();
  //   //   setTimeout(function(){ alert("Hello"); }, 3000);
  // }

  // const listItems = checkboxList.map((item, index) => (
  //   <div key={index} className="CheckBoxItem">
  //         <label class="container">{item.value}
  //         <input type="checkbox" onChange={() => onCheckChange(index)}/>
  //         <span class="checkmark"></span>
  //         </label>
  //   </div>
  // ));
  return (
    <div className="PhotoPicker">
      <div className="PhotoPickerTitle"></div>
      <label for="file" className="PhotoPickerLabel">
        {/* <i class="fas fa-file-upload uploadIcon"></i> */}
      </label>
      {/* <input type="file" accept="image/*" onChange={handleChange} id="file" className="inputfile"/> */}
      <UploadFiles onUpload={onUpload} checkedList={checkedList} onUpdate={onUpdate}/>
      <div className="PhotoPickerContainer">

      {/* <img
        src={photo}
        className="PhotoPickerPhoto"
        // style={{ filter: `grayscale(${filter}%)` }}
        />
      <img
        src={photo}
        className="PhotoPickerOverlay"
        style={{ "clip-path": `polygon(0 0, ${100-filter}% 0, ${100-filter}% 100%, 0% 100%)` }}
        /> */}
        </div>
    </div>
  );
}

export default PhotoPicker;
