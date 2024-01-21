import React from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";

import Header from "./components/Header";
import RestauContainer from "./components/RestauContainer";
import FilterButtons from "./components/FilterButtons";
import restaurants from "./utils/mockData";

import {useState} from "react"

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const[data, setData] = useState(restaurants);

  const handleFilter = (data)=>{
    setData(data);
  }
  return (
    <div className="appLayout">
      <Header 
        restauList={data}
        onFilter={handleFilter}
      />
      <div className="appBody">
        <h1 className="appBody__heading">Restaurants with online delivery.</h1>
        <FilterButtons onFilter={handleFilter}/>
        <RestauContainer restauList={data}/>
      </div>
    </div>
  );
};

root.render(<AppLayout/>);