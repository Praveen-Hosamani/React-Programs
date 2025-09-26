import React from 'react';
import Classprops from "./Classprops";
import Functionprops from "./Functionprops";


class App extends React.Component{
  render(){
    return(
      <div> 
        <Classprops name = "Learner1" place="Baagepalli"></Classprops>
        <p> Child Component</p>
        <Classprops name = "learner2" place="Bangalore"></Classprops>
        <button onClick={'button()'}> Click</button>
      
        <Classprops name = "Learner3" place="Mysore"></Classprops>
        <Functionprops name = "Learner4" place="Madikeri"></Functionprops>
      </div>
    );
  }
}
export default App;