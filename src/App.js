import "./App.css";
import Scroll from "./Scroll"
// import { robots } from "./robots";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
import { useEffect, useState } from "react";

const App = () => {

const [search, setSearch] = useState('')
const [robots, selectRobots] = useState([])

useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => selectRobots(users))
  },[])

const setSearchValue = (searchValue) =>{
  setSearch(searchValue)
  console.log(searchValue)
}



const setRobots = robots.filter(robot => {
  return robot.name.toLowerCase().includes(search.toLowerCase())
})


  if(robots.length===0){
    return <h1 className="tc f2 pa7 font">Loading</h1>
  } else{
    return (
      <>
        <div className="tc parent">
          <h1 className="f1 font">RoboDost</h1>
          <SearchBox searchfield={search} searchChange={(e) => setSearchValue(e.target.value)}/>
          <Scroll>
            <Cardlist robots={setRobots} />
          </Scroll>
        </div>
      </>
    );
  }
};

export default App;
