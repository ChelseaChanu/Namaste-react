import React from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";

import Header from "./components/Header";
import AppBody from "./components/AppBody";

import {API_URL} from "./utils/constants";
import {useState,useEffect} from "react"

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const[data, setData] = useState([]);
  const [filteredRestau, setfilteresRestau] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(API_URL);
    const json = await data.json();
    setData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteresRestau(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  const handleFilter = (filteredRestau)=>{
    setfilteresRestau(filteredRestau);
  }
  return (
    <div className="appLayout">
      <Header 
        restauList={data}
        onFilter={handleFilter}
      />
      <AppBody 
       restauList={data}
       filterRestau={filteredRestau}
       onFilter={handleFilter}
      />
    </div>
  );
};

root.render(<App/>);