import React, { useState } from "react";
// import ListItem from "./ListItem";
import cx from "classnames";

function DamageLocationImage(props) {
  const checkboxList = props.checkboxList;
  const [checked, setChecked] = useState([]);
  const { onContinue } = props;
  const handleClick = (evt) => {
    const shopName = evt.currentTarget.dataset.name;
    const shop = checkboxList.find((x) => x.name === shopName);
    return props.onClickFunction(shop);
  };

  function onCheckChange(idx) {
    const newValue = [...checked];
    newValue.includes(idx)
      ? newValue.splice(newValue.indexOf(idx), 1)
      : newValue.push(idx);
    setChecked(newValue);
  }

  function onContinueClicked() {
    var newValue = checked.sort().map((index) => checkboxList[index]);
    // newValue.sort();
    onContinue(newValue);
  }

  const boxPosX = [14,14,12,7,5,11,2,7,5,11,2,1,2,6,4,10];
  const boxPosY = [3,4,4,2,2,2,2,6,6,6,6,4,4,4,8,8];

  const listItems = checkboxList.map((item, index) => (
    <div key={index} className="CheckBoxItemCircle" title={item} style={{ "grid-column": `${boxPosX[index]}`, "grid-row": `${boxPosY[index]}` }}>
          <label className="container2">
              <input type="checkbox" onChange={() => onCheckChange(index)} />
              <span className="checkcircle"></span>
              {index>13 && <div className="checkText">
              {item}
              </div>}
            </label>
    </div>
  ));
  return (
    <div className="DamageLocationImage">
      <div className="DamageLocationContent">
        <img src="/car.png" className="CarImage" />
        <div className="DamageLocationButtons">
          {listItems}
        </div>
      </div>
      {checked.length>0 && <button className="continue" onClick={onContinueClicked}>Continue</button>}
    </div>
  );
}

export default DamageLocationImage;
