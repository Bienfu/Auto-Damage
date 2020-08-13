import React, { useState } from "react";
// import ListItem from "./ListItem";


function DamageLocation(props) {
    const checkboxList = props.checkboxList;
    const [checked, setChecked] = useState([]);
    // const handleClick = (evt) => {
    //   const shopName = evt.currentTarget.dataset.name;
    //   const shop = checkboxList.find(x => x.name === shopName);
    //   return props.onClickFunction(shop)
    // };

    function onCheckChange(idx){
      const newValue = [...checked];
      newValue.includes(idx)? newValue.splice(newValue.indexOf(idx),1) : newValue.push(idx);
      setChecked(newValue);
    }

    const listItems = checkboxList.map((item, index) => (
      <div key={index} className="CheckBoxItem">
            <label class="container">{item.value}
            <input type="checkbox" onChange={() => onCheckChange(index)}/>
            <span class="checkmark"></span>
            </label>
      </div>
    ));
    return (
            <div className="DamageLocation">
              <h1 className="DamageLocationTitle">Where did the damage occur?</h1>
              <div className="ListItemsContainer">{listItems}</div>
              <button className={(checked.length>0) ? "continue display" : "hide"}>Continue</button>
            </div>
           );
  }

export default DamageLocation;