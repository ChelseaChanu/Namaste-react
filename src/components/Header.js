import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/Images/search-icon.png"
import closeIcon from "../../assets/Images/close.png"
import { DataContext } from "./DataContextProvider";
import LoginPage from "./LoginPage";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { LOGO__URL } from "../utils/constants";

const Header = () => {
  const {data, handleFilter, loginStatus, updateLoginStatus} = useContext(DataContext);
  const [inputValue, setInputValue] = useState("");
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  
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

  // display and close status bar
  const displaySearchBar = ()=>{
    setSearchIsOpen(!searchIsOpen);
  }

  // silde in side bar of login 

  const displayLogin=()=>{
    if (loginStatus === "Logout") {
      updateLoginStatus("Login");
      setShowLoginPage(false);
    } else {
      setShowLoginPage(true);
    }
  }

  const closeLogin=()=>{
    setShowLoginPage(false);
  }

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__container" >
          <div className="header__container__container__logoContainer">
            <img className="header__container__container__logoContainer__logo" src={LOGO__URL} alt="logo" />
            <p className="header__container__container__logoContainer__location">Koramangala, Bengaluru, Karnataka, India</p>
          </div>
          { searchIsOpen && 
          <div className="header__container__container__searchContainer">
            <input type="text" className="header__container__container__searchContainer__search" 
            value={inputValue} 
            onChange={getValue} 
            onKeyDown={handleSearch}
            placeholder="Search for food or restaurants"/>
            <button className="header__container__container__searchContainer__btn" type="submit" onClick={searchItem}>
              <img src={searchIcon} alt="search-icon" />
            </button>
          </div>
          }
          <div className="header__container__container__features">
            <div className="header__container__container__features__expandSearch">
              <button className="header__container__container__features__expandSearch__btn" type="submit" onClick={displaySearchBar}>
                <img src={searchIsOpen? closeIcon:searchIcon} alt="search-icon" />
              </button>
            </div>
            <ul className="header__container__container__features__list">
              <li><Link to="/" className="navigateTo">Home</Link></li>
              <li><Link to="/about" className="navigateTo">About Us</Link></li>
              <li><Link to="" className="navigateTo"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
              <li id="login" onClick={displayLogin}>{loginStatus}</li>
            </ul>
          </div>
        </div>
      </div>
      {showLoginPage && <LoginPage onClose={closeLogin} />}
    </div>
  );
};

export default Header;