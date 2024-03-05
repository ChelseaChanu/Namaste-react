import { RESTAURANTS_API_URL } from "../utils/constants";
import {useState, useEffect, createContext} from "react"

// This context will be used to share data between components without needing to pass it 
// explicitly through props
export const DataContext = createContext();

export const DataContextProvider = ({children})=>{

  const[ userName, setUserName] = useState("");
  const[loginStatus, setLoginStatus] = useState("Login");
  const[data, setData] = useState([]);
  const [filteredRestau, setFilteresRestau] = useState([]);

  const updateName = (newName)=>{
    setUserName(newName);
  }

  const updateLoginStatus = (newStatus)=>{
    setLoginStatus(newStatus);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    try{
      const data = await fetch(RESTAURANTS_API_URL);
      if(!data.ok){
        throw new Error(`API call failed: ${data.status}`);
      }
      const json = await data.json();
      setData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteresRestau(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    catch(error){
      console.error("Fetching data failed:", error.message);
    }
  };
  const handleFilter = (filteredRestau)=>{
    setFilteresRestau(filteredRestau);
  };

  return(
    <DataContext.Provider value={{data, filteredRestau, handleFilter, userName, updateName, loginStatus, updateLoginStatus}}>
      {children}
    </DataContext.Provider>
  )
};