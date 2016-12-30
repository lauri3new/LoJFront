import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";

// App container acts as presentation frame for app.
const App = (props) => {
  return (
    <div>
      <Header />
      <Navbar />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
