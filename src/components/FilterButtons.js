import PrimaryBtn from "./PrimaryBtn";
import restaurants from "../utils/mockData";

const FilterButtons = ({onFilter})=>{
  return(
    <div className="filterButtons">
      <PrimaryBtn 
      buttonName="Ratings 4.0+"
      initialRestau={restaurants}
      filterFunc={(restaurants)=>
        restaurants.filter(restau => restau.info.avgRating > 4.0)
      }
      onFilter={onFilter}/>
       <PrimaryBtn 
      buttonName="Less than 300"
      initialRestau={restaurants}
      filterFunc={(restaurants)=>
        restaurants.filter(restau => restau.info.costForTwo < 300)
      }
      onFilter={onFilter}/>
    </div>
  );
}

export default FilterButtons;