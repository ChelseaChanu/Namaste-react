import ShimmerUI from "./ShimmerUI";
import RestauContainer from "./RestauContainer";
import FilterButtons from "./FilterButtons";

const AppBody = (props)=>{
  const {restauList, filterRestau, onFilter} = props;

  return restauList.length===0 ? <ShimmerUI /> : (
    <div className="appBody">
      <h1 className="appBody__heading">Restaurants with online delivery.</h1>
      <FilterButtons onFilter={onFilter} restauList={restauList}/>
      <RestauContainer filterRestau={filterRestau}/>
    </div>
  );
}

export default AppBody;