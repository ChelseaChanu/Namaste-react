import ShimmerUI from "./ShimmerUI";
import RestauContainer from "./RestauContainer";
import FilterButtons from "./FilterButtons";

import { useContext } from "react";
import { DataContext } from "./DataContextProvider";

const AppBody = ()=>{
  const {data, filteredRestau, handleFilter} = useContext(DataContext);
  return data?.length===0 ? <ShimmerUI /> : (
    <div className="appBody">
      <h1 className="appBody__heading">Restaurants with online delivery.</h1>
      <FilterButtons onFilter={handleFilter} restauList={data}/>
      <RestauContainer filterRestau={filteredRestau}/>
    </div>
  );
}

export default AppBody;