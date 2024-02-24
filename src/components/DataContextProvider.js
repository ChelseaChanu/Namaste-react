import { RESTAURANTS_API_URL } from "../utils/constants";
import {useState, useEffect, createContext} from "react"

// This context will be used to share data between components without needing to pass it 
// explicitly through props
export const DataContext = createContext();

export const DataContextProvider = ({children})=>{

  const[data, setData] = useState([]);
  const [filteredRestau, setfilteresRestau] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(RESTAURANTS_API_URL);
    const json = await data.json();
    setData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteresRestau(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const handleFilter = (filteredRestau)=>{
    setfilteresRestau(filteredRestau);
  };

  return(
    <DataContext.Provider value={{data, filteredRestau, handleFilter}}>
      {children}
    </DataContext.Provider>
  )
};