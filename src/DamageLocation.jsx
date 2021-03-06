import React, { useState } from "react";
// import ListItem from "./ListItem";


function DamageLocation(props) {
    const checkboxList = props.checkboxList;
    const [checked, setChecked] = useState([]);
    const {onContinue} = props;
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

    function onContinueClicked(){
      var newValue = checked.sort().map((index) => (checkboxList[index]));
      // newValue.sort();
      onContinue(newValue);
    }

    const listItems = checkboxList.map((item, index) => (
      <div key={index} className="CheckBoxItem">
            <label className="container">
            <input type="checkbox" onChange={() => onCheckChange(index)}/>
            <span className="checkmark"></span>
            <div className="checkText">
              {item}
            </div>
            </label>
      </div>
    ));
    return (
            <div className="DamageLocation">
              <div className="DamageLocationTitle">Where did the damage occur?</div>
              <div className="ListItemsContainer">{listItems}</div>
              {checked.length>0 && <button className="continue" onClick={onContinueClicked}>Continue</button>}
            </div>
           );
  }

export default DamageLocation;