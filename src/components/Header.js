import logo from "../../assets/Images/logo.png";
import searchIcon from "../../assets/Images/search-icon.png"

import {useState} from "react";

const Header = (props) => {
  const {restauList, onFilter} = props;
  const [inputValue, setInputValue] = useState("");
  // get the entered value
  const getValue = (event)=>{
    setInputValue(event.target.value);
  };

  // search the item
  const searchItem = (event)=>{
    const filtered = restauList.filter((restau)=>{
      const inputArr = inputValue.toLowerCase().split(" ");
      const cuisines = restau.info.cuisines.map((cuisine)=> cuisine.toLowerCase());
      
      // check if cuisine is present
      const case1 = restau.info.cuisines.some(element => element.toLowerCase() === inputValue.toLowerCase());
      // check if all the cuisines is present
      const case2 = inputArr.some(ele => cuisines.includes(ele));
      // check if part of input match name
      const case3 = inputArr.some(ele => restau.info.name.toLowerCase().includes(ele))

      return case1 || case2 || case3;
    });
    // setfilteresRestau(filtered);
    onFilter(filtered);
  }

  const handleSearch = (event)=>{
    if(event.key==='Enter')
      searchItem();
  }

  return (
    <div className="header">
      <div className="header__logoContainer">
        <img className="header__logoContainer__logo" src={logo} alt="logo" />
      </div>
      <div className="header__searchContainer">
        <input type="text" className="header__searchContainer__search" 
        value={inputValue} 
        onChange={getValue} 
        onKeyDown={handleSearch}
        placeholder="Search for food or restaurants"/>
        <button className="header__searchContainer__btn" type="submit" onClick={searchItem}>
          <img src={searchIcon} alt="search-icon" />
        </button>
      </div>
      <div className="header__features">
        <ul className="header__features__list">
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;