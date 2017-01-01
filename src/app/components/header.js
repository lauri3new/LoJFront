import React from "react";
import Styles from "./header.css";
import NavBar from "./navbar";

const Header = () => (
  <div className={Styles.container}>
    <div className={Styles.title}>
    LEAGUE OF JERSEYS
    </div>
    <NavBar />
  </div>
);

export default Header;
