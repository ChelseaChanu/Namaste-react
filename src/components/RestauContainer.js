import RestauCard from "./RestauCard";

const RestauContainer = ({filterRestau})=>{
  return(
    <div className="restauContainer">
      {
        filterRestau?.map((restaurant)=> <RestauCard key={restaurant.info.id} restauData = {restaurant}/>)
      }
    </div>
  );
};

export default RestauContainer;