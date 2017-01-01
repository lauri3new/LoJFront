import React from "react";
import Header from "../components/header";

// App container acts as presentation frame for app.
const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
