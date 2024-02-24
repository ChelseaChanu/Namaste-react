import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import searchIcon from "../../assets/Images/search-icon.png"
import { DataContext } from "./DataContextProvider";
import LoginPage from "./LoginPage";

const Header = () => {
  const {data, handleFilter} = useContext(DataContext);
  const [inputValue, setInputValue] = useState("");
  const [showLoginPage, setShowLoginPage] = useState(false);
  // get the entered value
  const getValue = (event)=>{
    setInputValue(event.target.value);
  };

  // search the item
  const searchItem = ()=>{
    const filtered = data.filter((restau)=>{
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
    handleFilter(filtered);
  }

  const handleSearch = (event)=>{
    if(event.key==='Enter')
      searchItem();
  }

  // silde in side bar of login 

  const displayLogin=()=>{
    setShowLoginPage(true);
  }

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__logoContainer">
          <img className="header__container__logoContainer__logo" src={logo} alt="logo" />
        </div>
        <div className="header__container__searchContainer">
          <input type="text" className="header__container__searchContainer__search" 
          value={inputValue} 
          onChange={getValue} 
          onKeyDown={handleSearch}
          placeholder="Search for food or restaurants"/>
          <button className="header__container__searchContainer__btn" type="submit" onClick={searchItem}>
            <img src={searchIcon} alt="search-icon" />
          </button>
        </div>
        <div className="header__container__features">
          <ul className="header__container__features__list">
            <li><Link to="/" className="navigateTo">Home</Link></li>
            <li><Link to="/about" className="navigateTo">About Us</Link></li>
            <li><Link to="" className="navigateTo">Cart</Link></li>
            <li id="login" onClick={displayLogin}>Login</li>
          </ul>
        </div>
      </div>
      {showLoginPage && <LoginPage/>}
    </div>
  );
};

export default Header;