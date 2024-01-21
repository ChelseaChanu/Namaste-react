import RestauCard from "./RestauCard";
import restaurants from "../utils/mockData";

const RestauContainer = ({restauList})=>{
  return(
    <div className="restauContainer">
      {
        restauList.map((restaurant)=> <RestauCard key={restaurant.info.id} restauData = {restaurant}/>)
      }
    </div>
  );
};

export default RestauContainer;