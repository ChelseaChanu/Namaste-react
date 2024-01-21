import { useState } from "react";

const PrimaryBtn = (props)=>{
  const {buttonName, initialRestau, filterFunc, onFilter} = props;
  const [restauList, setRestauList] = useState(initialRestau);

  // filter restau based on rating
  const filterRestau = ()=>{
    const filtered = filterFunc(restauList);
    setRestauList(filtered);
    onFilter(filtered);
  }
  return(
    <button className="primary-btn" onClick={filterRestau}>{buttonName}</button>
  );
}

export default PrimaryBtn;