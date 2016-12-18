import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import styles from "./app.css";
import Gallery from "./gallery.js";
import Header from "../components/header.js";

// App container acts as presentation frame for app.
// contains some in line styling and a ternary operator that renders
// a loading bar (could be replace with a nice spinner) when state property
// isLoading is true (for example during AJAX request).

const App = (props) => {
    return(
      <div>
          {/* <Header/> */}
          <Gallery/>
      </div>
        //<Footer/>
    )
}

// connect hooks up mapStateToProps and mapDispatchToProps to named component
// eg App
export default App;
