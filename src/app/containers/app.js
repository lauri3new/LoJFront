import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import styles from "./app.css";
import Gallery from "./gallery.js";
import Header from "../components/header.js";

// App container acts as presentation frame for app.

const App = (props) => {
    return(
      <div>
          <Header/> 
          <Gallery/>
      </div>
        //<Footer/>
    )
}

export default App;
