import React from "react";
import Game from "./game";
import League from "./league";

// App container acts as presentation frame for app.
const App = (props) => {
  return (
    <div>
    <div className="row">
      <Game />
    </div>
    <div style={{ marginTop:'100vh', height: '20vh', backgroundColor: 'rgb(230,230,230)', textAlign: 'center' }}>
      <h1 >LEAGUE OF JERSEYS</h1>
    </div>
    <div >
      <League />
    </div>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
